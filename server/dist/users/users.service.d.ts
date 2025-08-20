import { PrismaService } from "src/prisma/prisma.service";
import { ChangePasswordDto, EditUserDto } from "./dto";
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        id: number;
        firstname: string;
        lastname: string;
        email: string;
        createAt: Date;
        updatedAt: Date;
    }[]>;
    getOne(id: number): Promise<{
        id: number;
        firstname: string;
        lastname: string;
        email: string;
        createAt: Date;
        updatedAt: Date;
    }>;
    editUser(userId: number, dto: EditUserDto): Promise<import("../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        firstname: string;
        lastname: string;
        email: string;
        hash: string;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    edit(id: number, dto: EditUserDto): Promise<import("../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        firstname: string;
        lastname: string;
        email: string;
        hash: string;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    delete(id: number): Promise<{
        firstname: string;
        lastname: string;
    }>;
    changePassword(userId: number, dto: ChangePasswordDto): Promise<import("../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        firstname: string;
        lastname: string;
        email: string;
        hash: string;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
}
