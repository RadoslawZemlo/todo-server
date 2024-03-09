import {Controller, Get, Param} from '@nestjs/common';
import {CategoriesService} from './categories.service';
import {CategoryDocument} from '../schemas/category.schema';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {
  }

  @Get()
  getCategories(): Promise<CategoryDocument[]> {
    return this.categoryService.getCategories();
  }

  @Get(':id')
  getCategory(@Param('id') id: string) {
    return this.categoryService.getCategory(id);
  }
}
