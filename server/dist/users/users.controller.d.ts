import { User } from "prisma/generated/client1";
import { ChangePasswordDto, EditUserDto } from "./dto";
import { UsersService } from "./users.service";
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getMe(user: User): User;
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
    delete(id: number): Promise<{
        firstname: string;
        lastname: string;
    }>;
    edit(id: number, dto: EditUserDto): Promise<User>;
    updateUser(userId: number, dto: EditUserDto): Promise<User>;
    changePassword(userId: number, dto: ChangePasswordDto): Promise<User>;
}
