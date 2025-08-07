import { PrismaService } from "src/prisma/prisma.service";
import { PrismaService2 } from "src/prisma/prisma2.service";
import { CreateAttributeDto, EditAttributeDto } from "./dto";
export declare class AttributesService {
    private prisma;
    private prisma2;
    constructor(prisma: PrismaService, prisma2: PrismaService2);
    create(dto: CreateAttributeDto): Promise<import("../../prisma/generated/client1").Attribute>;
    getAll(): Promise<import("../../prisma/generated/client1").Attribute[]>;
    getOne(id: number): Promise<import("../../prisma/generated/client1").Attribute>;
    getByTableId(id: number): Promise<import("../../prisma/generated/client1").Attribute[]>;
    delete(id: number): Promise<{
        id: number;
        name: string;
    }>;
    deleteAll(): Promise<import("../../prisma/generated/client1").Prisma.BatchPayload>;
    deleteOfTable(id: number): Promise<import("../../prisma/generated/client1").Prisma.BatchPayload>;
    edit(id: number, dto: EditAttributeDto): Promise<import("../../prisma/generated/client1").Attribute>;
    findName(tableName: string): Promise<import("../../prisma/generated/client1").Attribute[]>;
    init(): Promise<{
        name: string;
    }[]>;
    importDbAttribute(data: any): Promise<any[]>;
    exportRelations(): Promise<{
        RelationshipKey: {};
        ParentKey: {};
    }>;
    importRelations(data: any): Promise<{
        RelationshipKey: {};
        ParentKey: {};
    }>;
}
