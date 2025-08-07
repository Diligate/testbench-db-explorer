"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const prisma2_service_1 = require("../prisma/prisma2.service");
let TablesService = class TablesService {
    constructor(prisma, prisma2) {
        this.prisma = prisma;
        this.prisma2 = prisma2;
    }
    async create(dto) {
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
    async getOne(id) {
        const table = await this.prisma.table.findUnique({
            where: {
                id: id,
            },
        });
        return table;
    }
    async getOneByName(name) {
        const table = await this.prisma.table.findUnique({
            where: {
                name: name,
            },
        });
        return table;
    }
    async getByIdName(tableName, column, id) {
        const row = await this.prisma2.$queryRawUnsafe(`SELECT * FROM ${tableName} where ${column} = ${id}`);
        return JSON.parse(JSON.stringify(row, (key, value) => (typeof value === "bigint" ? value.toString() : value)));
    }
    async delete(id) {
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
    async edit(id, dto) {
        const table = this.prisma.table.update({
            where: {
                id: id,
            },
            data: Object.assign({}, dto),
        });
        return table;
    }
    async refresh() {
        const tables = await this.prisma2.$queryRaw `
      SELECT TABLE_NAME ,
        (SELECT  CAST( sum(B.rows) as int) FROM sys.objects A  
              INNER JOIN sys.partitions B ON A.object_id = B.object_id AND [B].index_id IN ( 0, 1 ) 
              WHERE A.type = 'U'  AND A.Name = TABLE_NAME
              GROUP BY A.schema_id, A.Name ) AS RowsCount  ,
        (SELECT  count(OBJECT_NAME(parent_object_id)) AS [number_foreign_Key]  
              FROM sys.foreign_keys as f
              WHERE f.parent_object_id = OBJECT_ID('testbench_ee.' + TABLE_NAME) ) AS fkCount
      FROM  INFORMATION_SCHEMA.COLUMNS as col
      ORDER BY TABLE_NAME`;
        const all = [];
        for (let i = 0; i < tables.length; i++) {
            const table = await this.prisma.table.update({
                where: {
                    name: tables[i].TABLE_NAME,
                },
                data: {
                    rowCount: tables[i].RowsCount,
                    numForeignKey: tables[i].fkCount,
                },
            });
            all.push(table);
        }
        return all;
    }
    async init() {
        const tables = await this.prisma2.$queryRaw `
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
        const fkTables = await this.prisma2.$queryRaw `
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
                        if (fkTables[index].TABLE_NAME === tables[i].TABLE_NAME &&
                            tables[j].COLUMN_NAME === fkTables[index].COLUMN_NAME) {
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
                                    pKey: fkTables[index].types === "PRIMARY KEY"
                                        ? fkTables[index].types
                                        : null,
                                    fTable: fkTables[index].types == "FOREIGN KEY"
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
                        }
                        else if (tables[i].TABLE_NAME === tables[j].TABLE_NAME &&
                            index === fkTables.length - 1 &&
                            !exist) {
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
                }
                else {
                    i = j;
                    break;
                }
            }
            allAttributes.push(attributes);
        }
        return [all, allAttributes];
    }
    async importDbTable(data) {
        let all = [];
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
};
TablesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, prisma2_service_1.PrismaService2])
], TablesService);
exports.TablesService = TablesService;
//# sourceMappingURL=tables.service.js.map