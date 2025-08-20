import { ConfigService } from "@nestjs/config";
import { Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";
declare const JwtStrategy_base: new (...args: unknown[] | [opt: import("passport-jwt").StrategyOptions] | [opt: import("passport-jwt").StrategyOptions]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private prisma;
    constructor(config: ConfigService, prisma: PrismaService);
    validate(payload: {
        sub: number;
        email: string;
    }): Promise<import("../../../prisma/generated/client1/runtime").GetResult<{
        id: number;
        firstname: string;
        lastname: string;
        email: string;
        hash: string;
        createAt: Date;
        updatedAt: Date;
    }, unknown, never> & {}>;
}
export {};
