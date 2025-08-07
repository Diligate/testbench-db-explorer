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
exports.AttributesService = void 0;
const common_1 = require("@nestjs/common");
const parentKey_1 = require("../data/parentKey");
const relationshipKey_1 = require("../data/relationshipKey");
const prisma_service_1 = require("../prisma/prisma.service");
const prisma2_service_1 = require("../prisma/prisma2.service");
let AttributesService = class AttributesService {
    constructor(prisma, prisma2) {
        this.prisma = prisma;
        this.prisma2 = prisma2;
    }
    async create(dto) {
        const attribute = this.prisma.attribute.create({
            data: {
                name: dto.name,
                type: dto.type,
                description: dto.description,
                owner: {
                    connect: {
                        id: dto.tableId,
                    },
                },
            },
        });
        return attribute;
    }
    async getAll() {
        const attributes = await this.prisma.attribute.findMany();
        return attributes;
    }
    async getOne(id) {
        const attribute = await this.prisma.attribute.findUnique({
            where: {
                id: id,
            },
        });
        return attribute;
    }
    async getByTableId(id) {
        const attribute = await this.prisma.attribute.findMany({
            where: {
                tableId: id,
            },
        });
        return attribute;
    }
    async delete(id) {
        const attribute = this.prisma.attribute.delete({
            where: {
                id: id,
            },
            select: {
                id: true,
                name: true,
            },
        });
        return attribute;
    }
    async deleteAll() {
        const attribute = this.prisma.attribute.deleteMany();
        return attribute;
    }
    async deleteOfTable(id) {
        const attribute = this.prisma.attribute.deleteMany({
            where: {
                tableId: id,
            },
        });
        return attribute;
    }
    async edit(id, dto) {
        const attribute = this.prisma.attribute.update({
            where: {
                id: id,
            },
            data: {
                name: dto.name,
                type: dto.type,
                description: dto.description,
            },
        });
        return attribute;
    }
    async findName(tableName) {
        const table = await this.prisma.attribute.findMany({
            where: {
                fTable: tableName,
            },
        });
        return table;
    }
    async init() {
        const tables = await this.prisma.table.findMany();
        const attributes = await this.prisma.attribute.findMany();
        const allAttributes = [];
        attributes.map((attribute) => {
            tables.map((table) => {
                if (table.name === attribute.fTable) {
                    attributes.map((key) => {
                        if (key.tableId === table.id && key.pKey) {
                            allAttributes.push({
                                id: attribute.id,
                                pColumn: key.name,
                            });
                        }
                    });
                }
            });
            Object.keys(relationshipKey_1.RelationshipKey).forEach(async function (key, index) {
                if (relationshipKey_1.RelationshipKey[key].name.includes(attribute.name) &&
                    attribute.type === "bigint") {
                    allAttributes.push({
                        id: attribute.id,
                        pColumn: "PK",
                        fTable: relationshipKey_1.RelationshipKey[key].tableName,
                    });
                }
            });
            Object.keys(parentKey_1.ParentKey).forEach(async function (key) {
                if (attribute.name === "parentPK" &&
                    parentKey_1.ParentKey[key].name.includes(attribute.tableName) &&
                    attribute.type === "bigint") {
                    allAttributes.push({
                        id: attribute.id,
                        pColumn: "PK",
                        fTable: parentKey_1.ParentKey[key].parent,
                    });
                }
            });
        });
        return Promise.all(allAttributes.map((all) => {
            if (all.fTable) {
                const att = this.prisma.attribute.update({
                    where: {
                        id: all.id,
                    },
                    data: {
                        pColumn: all.pColumn,
                        fTable: all.fTable,
                    },
                    select: {
                        name: true,
                    },
                });
                return att;
            }
            else {
                const att = this.prisma.attribute.update({
                    where: {
                        id: all.id,
                    },
                    data: {
                        pColumn: all.pColumn,
                    },
                    select: {
                        name: true,
                    },
                });
                return att;
            }
        }));
    }
    async importDbAttribute(data) {
        const attributes = [];
        console.log(data.length);
        for (let i = 0; i < data.length - 1; i++) {
            if (data[i]["Name"]) {
                const attribute = await this.prisma.attribute.create({
                    data: {
                        name: data[i]["Name"],
                        type: data[i].Type,
                        pKey: data[i]["Primary key"],
                        fTable: data[i]["Foreign table"],
                        indexName: data[i]["Index name"],
                        tableName: data[i]["Table name"],
                        pColumn: data[i]["Table name"],
                        description: data[i]["Description"],
                        owner: {
                            connect: {
                                name: data[i]["Table name"],
                            },
                        },
                    },
                });
                attributes.push(attribute);
            }
        }
        return attributes;
    }
    async exportRelations() {
        return { RelationshipKey: relationshipKey_1.RelationshipKey, ParentKey: parentKey_1.ParentKey };
    }
    async importRelations(data) {
        (0, parentKey_1.setParentKey)(data[0]);
        (0, relationshipKey_1.setRelationshipKey)(data[1]);
        return { RelationshipKey: relationshipKey_1.RelationshipKey, ParentKey: parentKey_1.ParentKey };
    }
};
AttributesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, prisma2_service_1.PrismaService2])
], AttributesService);
exports.AttributesService = AttributesService;
//# sourceMappingURL=attributes.service.js.map