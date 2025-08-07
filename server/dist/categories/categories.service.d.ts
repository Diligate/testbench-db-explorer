import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryDto } from './dto';
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CategoryDto): Promise<any>;
    getAll(): Promise<any>;
    getOne(id: number): Promise<any>;
    delete(id: number): Promise<any>;
    edit(id: number, dto: CategoryDto): Promise<any>;
}
