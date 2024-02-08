import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Todo} from '../schemas/todo.schema';
import {TodoDto} from './dto/todo.dto';
import {UpdateTodoDto} from './dto/update-todo.dto';

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

  updateTodo(id: string, updateTodoDto: UpdateTodoDto) {
    return this.todoModel.findByIdAndUpdate(id, updateTodoDto);
  }

  deleteTodo(id: string) {
    return this.todoModel.findByIdAndDelete(id);
  }
}
