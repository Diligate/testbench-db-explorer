import { PrismaService } from "src/prisma/prisma.service";
import { CreateTablesDto, EditTablesDto } from "./dto";
import { PrismaService2 } from "src/prisma/prisma2.service";
export declare class TablesService {
    private prisma;
    private prisma2;
    constructor(prisma: PrismaService, prisma2: PrismaService2);
    create(dto: CreateTablesDto): Promise<import("../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        name: string;
        rowCount: number;
        numForeignKey: number;
        description: string;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    getAll(): Promise<(import("../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        name: string;
        rowCount: number;
        numForeignKey: number;
        description: string;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
    getOne(id: number): Promise<import("../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        name: string;
        rowCount: number;
        numForeignKey: number;
        description: string;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    getOneByName(name: string): Promise<import("../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        name: string;
        rowCount: number;
        numForeignKey: number;
        description: string;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    getByIdName(tableName: string, column: string, id: number): Promise<any>;
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
    refresh(): Promise<any[]>;
    init(): Promise<any[][]>;
    importDbTable(data: any): Promise<any[]>;
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
}
