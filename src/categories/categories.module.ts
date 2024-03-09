import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {CategoriesService} from './categories/categories.service';
import {CategoriesController} from './categories/categories.controller';
import {Category, CategorySchema} from './schemas/category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Category.name, schema: CategorySchema}])
  ],
  providers: [CategoriesService],
  controllers: [CategoriesController]
})
export class CategoriesModule {
}
