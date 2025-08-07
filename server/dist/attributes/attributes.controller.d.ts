import { Request } from "express";
import { AttributesService } from "./attributes.service";
import { CreateAttributeDto, EditAttributeDto } from "./dto";
export declare class AttributesController {
    private attributesService;
    constructor(attributesService: AttributesService);
    create(dto: CreateAttributeDto): Promise<import("../../prisma/generated/client1").Attribute>;
    importDb(req: Request): Promise<any[]>;
    importRelationship(req: Request): Promise<{
        RelationshipKey: {};
        ParentKey: {};
    }>;
    exportRelation(): Promise<{
        RelationshipKey: {};
        ParentKey: {};
    }>;
    getAll(): Promise<import("../../prisma/generated/client1").Attribute[]>;
    init(): Promise<{
        name: string;
    }[]>;
    findFk(tableName: string): Promise<import("../../prisma/generated/client1").Attribute[]>;
    getOne(id: number): Promise<import("../../prisma/generated/client1").Attribute>;
    getByTableId(id: number): Promise<import("../../prisma/generated/client1").Attribute[]>;
    delete(id: number): Promise<{
        id: number;
        name: string;
    }>;
    deleteAll(): Promise<import("../../prisma/generated/client1").Prisma.BatchPayload>;
    deleteOfTable(id: number): Promise<import("../../prisma/generated/client1").Prisma.BatchPayload>;
    edit(id: number, dto: EditAttributeDto): Promise<import("../../prisma/generated/client1").Attribute>;
}
