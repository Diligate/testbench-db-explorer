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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CategoriesService = class CategoriesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const category = this.prisma.category.create({
            data: Object.assign({}, dto),
        });
        return category;
    }
    async getAll() {
        const categories = await this.prisma.category.findMany();
        return categories;
    }
    async getOne(id) {
        const category = await this.prisma.category.findUnique({
            where: {
                id: id,
            },
        });
        return category;
    }
    async delete(id) {
        const category = this.prisma.category.delete({
            where: {
                id: id,
            },
            select: {
                id: true,
                name: true,
            },
        });
        return category;
    }
    async edit(id, dto) {
        const category = this.prisma.category.update({
            where: {
                id: id,
            },
            data: {
                name: dto.name,
            },
        });
        return category;
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map