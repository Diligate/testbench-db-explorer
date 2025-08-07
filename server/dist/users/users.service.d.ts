import { PrismaService } from "src/prisma/prisma.service";
import { ChangePasswordDto, EditUserDto } from "./dto";
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        firstname: string;
        lastname: string;
        email: string;
        createAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
    getOne(id: number): Promise<{
        firstname: string;
        lastname: string;
        email: string;
        createAt: Date;
        updatedAt: Date;
        id: number;
    }>;
    editUser(userId: number, dto: EditUserDto): Promise<import("../../prisma/generated/client1").User>;
    edit(id: number, dto: EditUserDto): Promise<import("../../prisma/generated/client1").User>;
    delete(id: number): Promise<{
        firstname: string;
        lastname: string;
    }>;
    changePassword(userId: number, dto: ChangePasswordDto): Promise<import("../../prisma/generated/client1").User>;
}
