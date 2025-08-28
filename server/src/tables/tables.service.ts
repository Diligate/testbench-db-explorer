import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTablesDto, EditTablesDto } from "./dto";
import { PrismaService2 } from "src/prisma/prisma2.service";
import { connect } from "http2";
import { Console } from "console";
import { env } from "process";

@Injectable()
export class TablesService {
  constructor(private prisma: PrismaService, private prisma2: PrismaService2) {}

  async create(dto: CreateTablesDto) {
    const table = await this.prisma.table.create({
      data: {
        name: dto.name,
        rowCount: dto.rowCount,
        numForeignKey: dto.numForeignKey,
        description: dto.description,
      },
    });
    return table;
  }

  async getAll() {
    const tables = await this.prisma.table.findMany();
    return tables;
  }

  async getOne(id: number) {
    const table = await this.prisma.table.findUnique({
      where: {
        id: id,
      },
    });
    return table;
  }

  async getOneByName(name: string) {
    const table = await this.prisma.table.findUnique({
      where: {
        name: name,
      },
    });
    return table;
  }

  async getByIdName(tableName: string, column: string, id: number) {
    const row = await this.prisma2.$queryRawUnsafe(
      `SELECT * FROM ${tableName} where ${column} = ${id}`
    );
    return JSON.parse(
      JSON.stringify(
        row,
        (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
      )
    );
  }

  async delete(id: number) {
    const table = this.prisma.table.delete({
      where: {
        id: id,
      },
      select: {
        name: true,
      },
    });
    return table;
  }

  async deleteAll() {
    const table = this.prisma.table.deleteMany();
    return table;
  }

  async edit(id: number, dto: EditTablesDto) {
    const table = this.prisma.table.update({
      where: {
        id: id,
      },
      data: {
        ...dto,
      },
    });
    return table;
  }
  async refresh() {
  // Fetch all tables and attributes
  const tables = await this.prisma.table.findMany();
  const attributes = await this.prisma.attribute.findMany();

  // Compute foreign key counts per table (similar to validateKeys)
  const byTable = new Map<string, { fk: number }>();
  tables.forEach((t) => byTable.set(t.name, { fk: 0 }));
  attributes.forEach((a) => {
    const t = byTable.get(a.tableName);
    if (t && a.fTable) t.fk += 1;
  });

  // Fetch row counts using the existing SQL query for consistency
  const tableRows: [{ TABLE_NAME: string; RowsCount: number }] =
    await this.prisma2.$queryRaw`
      SELECT TABLE_NAME,
             (SELECT CAST(sum(B.rows) as int) 
              FROM sys.objects A  
              INNER JOIN sys.partitions B ON A.object_id = B.object_id AND B.index_id IN (0, 1) 
              WHERE A.type = 'U' AND A.Name = TABLE_NAME
              GROUP BY A.schema_id, A.Name) AS RowsCount
      FROM INFORMATION_SCHEMA.COLUMNS
      GROUP BY TABLE_NAME`;

  // Update tables with row counts and foreign key counts
  const all = [];
  for (const table of tables) {
    const rowData = tableRows.find((r) => r.TABLE_NAME === table.name);
    const fkData = byTable.get(table.name);
    const updatedTable = await this.prisma.table.update({
      where: { name: table.name },
      data: {
        rowCount: rowData ? rowData.RowsCount : table.rowCount,
        numForeignKey: fkData ? fkData.fk : table.numForeignKey,
      },
    });
    all.push(updatedTable);
  }

  return all;
}

  async init() {
    const tables: [
      {
        TABLE_NAME: string;
        COLUMN_NAME: string;
        DATA_TYPE: string;
        CHARACTER_MAXIMUM_LENGTH: string;
        RowsCount: number;
        fkCount: number;
      }
    ] = await this.prisma2.$queryRaw`
      SELECT TABLE_NAME ,
        COLUMN_NAME ,
        DATA_TYPE ,
        CHARACTER_MAXIMUM_LENGTH, 
        (SELECT  CAST( sum(B.rows) as int) FROM sys.objects A  
              INNER JOIN sys.partitions B ON A.object_id = B.object_id  AND [B].index_id IN ( 0, 1 ) 
              WHERE A.type = 'U'  AND A.Name = TABLE_NAME
              GROUP BY A.schema_id, A.Name ) AS RowsCount  ,
        (SELECT  count(OBJECT_NAME(parent_object_id)) AS [number_foreign_Key]  
              FROM sys.foreign_keys as f
              WHERE f.parent_object_id = OBJECT_ID(TABLE_NAME) ) AS fkCount
      FROM  INFORMATION_SCHEMA.COLUMNS as col
      ORDER BY TABLE_NAME`;
    const fkTables: [
      {
        TABLE_NAME: string;
        COLUMN_NAME: string;
        CONSTRAINT_NAME: string;
        fTable: string;
        types: string;
      }
    ] = await this.prisma2.$queryRaw`
            SELECT 
              col.TABLE_NAME, 
              col.COLUMN_NAME,
              col.CONSTRAINT_NAME,
              (select OBJECT_NAME(k.referenced_object_id) as ftable
                  from sys.foreign_keys k 
                  where OBJECT_NAME(k.object_id)=col.CONSTRAINT_NAME ) as fTable,
              k.CONSTRAINT_TYPE as types
            FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE as col 
            INNER JOIN INFORMATION_SCHEMA.TABLE_CONSTRAINTS k ON k.CONSTRAINT_NAME=col.CONSTRAINT_NAME 
            WHERE k.CONSTRAINT_TYPE='FOREIGN KEY' or k.CONSTRAINT_TYPE='PRIMARY KEY'`;

    const all = [];
    const allAttributes = [];
    let i = 0;
    while (i < tables.length) {
      const table = await this.prisma.table.create({
        data: {
          name: tables[i].TABLE_NAME,
          rowCount: tables[i].RowsCount,
          numForeignKey: tables[i].fkCount,
        },
      });

      all.push(table);
      const attributes = [];

      for (let j = i; j < tables.length; j++) {
        let exist = false;
        if (tables[i].TABLE_NAME === tables[j].TABLE_NAME) {
          for (let index = 0; index < fkTables.length; index++) {
            if (
              fkTables[index].TABLE_NAME === tables[i].TABLE_NAME &&
              tables[j].COLUMN_NAME === fkTables[index].COLUMN_NAME
            ) {
              exist = true;
              const attribute = await this.prisma.attribute.create({
                data: {
                  name: tables[j].COLUMN_NAME,
                  type: tables[j].DATA_TYPE.includes("varchar")
                    ? tables[j].DATA_TYPE +
                      "(" +
                      tables[j].CHARACTER_MAXIMUM_LENGTH +
                      ")"
                    : tables[j].DATA_TYPE,
                  pKey:
                    fkTables[index].types === "PRIMARY KEY"
                      ? fkTables[index].types
                      : null,
                  fTable:
                    fkTables[index].types == "FOREIGN KEY"
                      ? fkTables[index].fTable
                      : null,
                  indexName: fkTables[index].CONSTRAINT_NAME,
                  tableName: tables[j].TABLE_NAME,
                  owner: {
                    connect: {
                      name: tables[j].TABLE_NAME,
                    },
                  },
                },
              });

              attributes.push(attribute);
            } else if (
              tables[i].TABLE_NAME === tables[j].TABLE_NAME &&
              index === fkTables.length - 1 &&
              !exist
            ) {
              const attribute = await this.prisma.attribute.create({
                data: {
                  name: tables[j].COLUMN_NAME,
                  type: tables[j].DATA_TYPE.includes("varchar")
                    ? tables[j].DATA_TYPE +
                      "(" +
                      tables[j].CHARACTER_MAXIMUM_LENGTH +
                      ")"
                    : tables[j].DATA_TYPE,
                  tableName: tables[j].TABLE_NAME,
                  owner: {
                    connect: {
                      name: tables[j].TABLE_NAME,
                    },
                  },
                },
              });

              attributes.push(attribute);
            }
          }

          if (j === tables.length - 1) {
            i = j + 1;
          }
        } else {
          i = j;
          break;
        }
      }
      allAttributes.push(attributes);
    }
    return [all, allAttributes];
  }

  async importDbTable(data: any) {
    const all = [];
    console.log(data.length);
    for (let i = 0; i < data.length; i++) {
      const table = await this.prisma.table.create({
        data: {
          name: data[i]["Name"],
          rowCount: parseInt(data[i]["Row count"]),
          numForeignKey: parseInt(data[i]["Number of foreign key"]),
          description: data[i].Description,
        },
      });

      all.push(table);
    }

    return all;
  }

  async getGraph() {
    const tables = await this.prisma.table.findMany();
    const attributes = await this.prisma.attribute.findMany();

    const deriveContext = (tableName: string) => {
      const name = tableName.toLowerCase();
      if (
        name.includes("test") ||
        name.includes("exec") ||
        name.includes("cycle") ||
        name.includes("spec")
      )
        return "Testing";
      if (name.includes("requirement")) return "Requirements";
      if (name.includes("user") || name.includes("tester")) return "Users";
      if (name.includes("meta") || name.includes("metaword")) return "Meta";
      if (name.includes("file") || name.includes("attach")) return "Files";
      if (name.includes("datatype")) return "DataTypes";
      if (name.includes("plugin") || name.includes("pref")) return "Config";
      return "Other";
    };

    const nodes = tables.map((t) => {
      const pkColumns = attributes
        .filter((a) => a.tableId === t.id && a.pKey)
        .map((a) => a.name);
      return {
        id: t.name,
        name: t.name,
        group: deriveContext(t.name),
        pkColumns,
        rowCount: t.rowCount,
        fkCount: t.numForeignKey,
      };
    });

    const links = attributes
      .filter((a) => a.fTable)
      .map((a) => ({
        source: a.tableName,
        target: a.fTable,
        fkColumn: a.name,
        pkColumn: a.pColumn || null,
        constraint: a.indexName || null,
      }));

    return { nodes, links };
  }

  async validateKeys() {
    const tables = await this.prisma.table.findMany();
    const attributes = await this.prisma.attribute.findMany();

    const byTable = new Map<string, { pk: string[]; fk: number }>();
    tables.forEach((t) => byTable.set(t.name, { pk: [], fk: 0 }));
    attributes.forEach((a) => {
      const t = byTable.get(a.tableName);
      if (!t) return;
      if (a.pKey) t.pk.push(a.name);
      if (a.fTable) t.fk += 1;
    });

    const issues: Array<{
      table: string;
      type: string;
      detail: string;
    }> = [];

    byTable.forEach((v, k) => {
      if (v.pk.length === 0) {
        issues.push({ table: k, type: "NO_PRIMARY_KEY", detail: "Table has no primary key" });
      }
      if (v.pk.length > 1) {
        issues.push({
          table: k,
          type: "COMPOSITE_PRIMARY_KEY",
          detail: `Table has composite primary key columns: ${v.pk.join(", ")}`,
        });
      }
    });

    return {
      summary: Array.from(byTable.entries()).map(([table, { pk, fk }]) => ({
        table,
        primaryKeyColumns: pk,
        foreignKeyCount: fk,
      })),
      issues,
      rules: {
        primaryKey: "Prefer a single-column primary key. Composite keys are allowed for join/association tables only.",
        foreignKeys:
          "Foreign keys should reference a single parent table per column. Avoid nullable FKs unless required by the domain.",
      },
    };
  }
}
