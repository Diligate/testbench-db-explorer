import { PrismaService } from "src/prisma/prisma.service";
import { CreateTablesDto, EditTablesDto } from "./dto";
import { PrismaService2 } from "src/prisma/prisma2.service";
export declare class TablesService {
    private prisma;
    private prisma2;
    constructor(prisma: PrismaService, prisma2: PrismaService2);
    create(dto: CreateTablesDto): Promise<import("../../prisma/generated/client1").Table>;
    getAll(): Promise<import("../../prisma/generated/client1").Table[]>;
    getOne(id: number): Promise<import("../../prisma/generated/client1").Table>;
    getOneByName(name: string): Promise<import("../../prisma/generated/client1").Table>;
    getByIdName(tableName: string, column: string, id: number): Promise<any>;
    delete(id: number): Promise<{
        name: string;
    }>;
    deleteAll(): Promise<import("../../prisma/generated/client1").Prisma.BatchPayload>;
    edit(id: number, dto: EditTablesDto): Promise<import("../../prisma/generated/client1").Table>;
    refresh(): Promise<any[]>;
    init(): Promise<any[][]>;
    importDbTable(data: any): Promise<any[]>;
}
