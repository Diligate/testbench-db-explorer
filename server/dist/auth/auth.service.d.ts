import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto, LogDto } from "./dto";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    signUp(dto: AuthDto): Promise<{
        access_token: string;
        user: any;
    }>;
    signIn(dto: LogDto): Promise<{
        access_token: string;
        user: any;
    }>;
    signToken(userId: number, email: string, user: any): Promise<{
        access_token: string;
        user: any;
    }>;
}
