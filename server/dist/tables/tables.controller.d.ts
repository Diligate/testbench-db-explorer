import { Request } from "express";
import { CreateTablesDto, EditTablesDto } from "./dto";
import { TablesService } from "./tables.service";
export declare class TablesController {
    private tablesService;
    constructor(tablesService: TablesService);
    create(dto: CreateTablesDto): Promise<import("../../prisma/generated/client1").Table>;
    importDb(req: Request): Promise<any[]>;
    getAll(): Promise<import("../../prisma/generated/client1").Table[]>;
    refresh(): Promise<any[]>;
    findPk(tableName: string, column: string, id: number): Promise<any>;
    add(): Promise<any[][]>;
    getOneByName(name: string): Promise<import("../../prisma/generated/client1").Table>;
    getOne(id: number): Promise<import("../../prisma/generated/client1").Table>;
    delete(id: number): Promise<{
        name: string;
    }>;
    deleteAll(): Promise<import("../../prisma/generated/client1").Prisma.BatchPayload>;
    edit(id: number, dto: EditTablesDto): Promise<import("../../prisma/generated/client1").Table>;
}
