import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Todo, TodoDocument} from '../schemas/todo.schema';
import {TodoDto} from './dto/todo.dto';
import {UpdateTodoDto} from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {
  }

  getTodos(): Promise<TodoDocument[]> {
    return this.todoModel.find({}).exec();
  }

  async getTodo(id: string): Promise<TodoDocument> {
    const todo = await this.todoModel.findOne({_id: id}).exec();
    if (!todo)
      throw new NotFoundException('Todo was not found');
    return todo;
  }

  addTodo(todoDto: TodoDto): Promise<TodoDocument> {
    const newTodo = {...todoDto, completed: false};
    return this.todoModel.create(newTodo);
  }

  async updateTodo(id: string, updateTodoDto: UpdateTodoDto): Promise<TodoDocument> {
    const updated = await this.todoModel.findByIdAndUpdate(id, {$set: updateTodoDto}, {new: true}).exec();
    if (!updated)
      throw new NotFoundException('Todo was not found');
    return updated;
  }

  async deleteTodo(id: string): Promise<TodoDocument> {
    const deleted = await this.todoModel.findByIdAndDelete(id).exec();
    if (!deleted)
      throw new NotFoundException('Todo was not found');
    return deleted;
  }
}
