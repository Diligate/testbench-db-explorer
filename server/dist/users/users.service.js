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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const argon = require("argon2");
const runtime_1 = require("@prisma/client/runtime");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        const users = await this.prisma.user.findMany({
            select: {
                id: true,
                firstname: true,
                lastname: true,
                email: true,
                createAt: true,
                updatedAt: true,
            },
        });
        return users;
    }
    async getOne(id) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: id,
            },
            select: {
                id: true,
                firstname: true,
                lastname: true,
                email: true,
                createAt: true,
                updatedAt: true,
            },
        });
        return user;
    }
    async editUser(userId, dto) {
        try {
            const user = await this.prisma.user.update({
                where: {
                    id: userId,
                },
                data: Object.assign({}, dto),
            });
            delete user.hash;
            return user;
        }
        catch (error) {
            if (error instanceof runtime_1.PrismaClientKnownRequestError) {
                if (error.code === "P2002") {
                    throw new common_1.ForbiddenException("Credentials taken");
                }
            }
            throw error;
        }
    }
    async edit(id, dto) {
        try {
            const user = this.prisma.user.update({
                where: {
                    id: id,
                },
                data: Object.assign({}, dto),
            });
            return user;
        }
        catch (error) {
            console.log("error");
            if (error instanceof runtime_1.PrismaClientKnownRequestError) {
                if (error.code === "P2002") {
                    throw new common_1.ForbiddenException("Credentials taken");
                }
            }
            throw error;
        }
    }
    async delete(id) {
        const table = this.prisma.user.delete({
            where: {
                id: id,
            },
            select: {
                firstname: true,
                lastname: true,
            },
        });
        return table;
    }
    async changePassword(userId, dto) {
        const hash = await argon.hash(dto.password);
        const user = await this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                hash,
            },
        });
        console.log(user);
        delete user.hash;
        return user;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)({}),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map