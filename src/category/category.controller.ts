import {Body, Controller, Get, Post} from "@nestjs/common";
import CategoryService from "./category.service";
import {CreateCategoryDto} from "./dtos/createCategory.dto";

@Controller('/categories')
export default class CategoryController {
    constructor(private readonly categoryService: CategoryService) {
    }

    @Get()
    getAllCategories() {
        return this.categoryService.getAllCategories();
    }

    @Post()
    async createCategory(@Body() category: CreateCategoryDto) {
        return this.categoryService.createCategory(category);
    }
}
