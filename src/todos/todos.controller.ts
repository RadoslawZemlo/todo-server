import {Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {TodosService} from './todos.service';
import {TodoDto} from './dto/todo.dto';
import {UpdateTodoDto} from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {
  }

  @Get()
  getTodos() {
    return this.todosService.getTodos();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  addTodo(@Body() todoDto: TodoDto) {
    return this.todosService.addTodo(todoDto);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  updateTodo(@Param('id') id: string, @Body() updatedTodoDto: UpdateTodoDto) {
    return this.todosService.updateTodo(id, updatedTodoDto);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todosService.deleteTodo(id);
  }
}
