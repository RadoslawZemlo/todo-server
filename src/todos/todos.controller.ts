import {Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {TodosService} from './todos.service';
import {TodoDto} from './dto/todo.dto';
import {UpdateTodoDto} from './dto/update-todo.dto';
import {TodoDocument} from '../schemas/todo.schema';
// import {Request, Response} from 'express';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {
  }

  @Get()
  getTodos(): Promise<TodoDocument[]> {
    return this.todosService.getTodos();
  }

  @Get(':id')
  getTodo(@Param('id') id: string): Promise<TodoDocument> {
    return this.todosService.getTodo(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  addTodo(@Body() todoDto: TodoDto): Promise<TodoDocument> {
    return this.todosService.addTodo(todoDto);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  updateTodo(@Param('id') id: string, @Body() updatedTodoDto: UpdateTodoDto): Promise<TodoDocument> {
    return this.todosService.updateTodo(id, updatedTodoDto);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string): Promise<void> {
    await this.todosService.deleteTodo(id);
  }
}
