import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import Category from "./category.entity";
import {CreateCategoryDto} from "./dtos/createCategory.dto";

@Injectable()
export default class CategoryService {
    constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {
    }

    getAllCategories() {
        return this.categoryRepository.find();
    }

    async createCategory(category: CreateCategoryDto) {
        const newCategory = this.categoryRepository.create(category);
        await this.categoryRepository.save(newCategory);
        return newCategory;
    }
}
