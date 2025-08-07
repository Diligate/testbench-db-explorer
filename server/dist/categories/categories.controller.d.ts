import { CategoriesService } from './categories.service';
import { CategoryDto } from './dto';
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    create(dto: CategoryDto): Promise<any>;
    getAll(): Promise<any>;
    getOne(id: number): Promise<any>;
    delete(id: number): Promise<any>;
    edit(id: number, dto: CategoryDto): Promise<any>;
}
