import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "../../prisma/generated/client2";
export declare class PrismaService2 extends PrismaClient {
    constructor(config: ConfigService);
}
