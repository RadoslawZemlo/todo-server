import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Category, CategoryDocument} from '../schemas/category.schema';
import {Model} from 'mongoose';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category.name) private categoryModel: Model<Category>) {
  }

  getCategories(): Promise<CategoryDocument[]> {
    return this.categoryModel.find({}).exec();
  }

  async getCategory(id: string): Promise<CategoryDocument> {
    const category = await this.categoryModel.findOne({_id: id}).exec();
    if (!category)
      throw new NotFoundException('Category not found');
    return category;
  }
}
