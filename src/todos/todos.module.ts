import {Module} from '@nestjs/common';
import {TodosService} from './todos.service';
import {TodosController} from './todos.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {Todo, TodoSchema} from './schemas/todo.schema';
import {Category, CategorySchema} from '../categories/schemas/category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Todo.name, schema: TodoSchema},
      {name: Category.name, schema: CategorySchema}
    ])
  ],
  providers: [TodosService],
  controllers: [TodosController]
})
export class TodosModule {
}
