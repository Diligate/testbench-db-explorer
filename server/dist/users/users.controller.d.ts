import { User } from "prisma/generated/client1";
import { ChangePasswordDto, EditUserDto } from "./dto";
import { UsersService } from "./users.service";
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getMe(user: User): import("../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        firstname: string;
        lastname: string;
        email: string;
        hash: string;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {};
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
    delete(id: number): Promise<{
        firstname: string;
        lastname: string;
    }>;
    edit(id: number, dto: EditUserDto): Promise<import("../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        firstname: string;
        lastname: string;
        email: string;
        hash: string;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
    updateUser(userId: number, dto: EditUserDto): Promise<import("../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        firstname: string;
        lastname: string;
        email: string;
        hash: string;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
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
