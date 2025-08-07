import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "../../prisma/generated/client1";
export declare class PrismaService extends PrismaClient {
    constructor(config: ConfigService);
}
