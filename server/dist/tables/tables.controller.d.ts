import { Request } from "express";
import { CreateTablesDto, EditTablesDto } from "./dto";
import { TablesService } from "./tables.service";
export declare class TablesController {
    private tablesService;
    constructor(tablesService: TablesService);
    create(dto: CreateTablesDto): Promise<import("../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        name: string;
        rowCount: number;
        numForeignKey: number;
        description: string;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    importDb(req: Request): Promise<any[]>;
    getAll(): Promise<(import("../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        name: string;
        rowCount: number;
        numForeignKey: number;
        description: string;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    refresh(): Promise<any[]>;
    findPk(tableName: string, column: string, id: number): Promise<any>;
    add(): Promise<any[][]>;
    getOneByName(name: string): Promise<import("../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        name: string;
        rowCount: number;
        numForeignKey: number;
        description: string;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    getGraph(): Promise<{
        nodes: {
            id: string;
            name: string;
            group: string;
            pkColumns: string[];
            rowCount: number;
            fkCount: number;
        }[];
        links: {
            source: string;
            target: string;
            fkColumn: string;
            pkColumn: string;
            constraint: string;
        }[];
    }>;
    validateKeys(): Promise<{
        summary: {
            table: string;
            primaryKeyColumns: string[];
            foreignKeyCount: number;
        }[];
        issues: {
            table: string;
            type: string;
            detail: string;
        }[];
        rules: {
            primaryKey: string;
            foreignKeys: string;
        };
    }>;
    getOne(id: number): Promise<import("../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        name: string;
        rowCount: number;
        numForeignKey: number;
        description: string;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    delete(id: number): Promise<{
        name: string;
    }>;
    deleteAll(): Promise<import("../../prisma/generated/client1").Prisma.BatchPayload>;
    edit(id: number, dto: EditTablesDto): Promise<import("../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        name: string;
        rowCount: number;
        numForeignKey: number;
        description: string;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
}
