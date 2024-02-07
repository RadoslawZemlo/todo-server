import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Todo} from '../schemas/todo.schema';
import {TodoDto} from './dto/todo.dto';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {
  }

  getTodos() {
    return this.todoModel.find();
  }

  addTodo(todoDto: TodoDto) {
    const newTodo = new this.todoModel(todoDto);
    return newTodo.save();
  }
}
