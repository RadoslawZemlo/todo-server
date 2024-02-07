import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {TodosService} from './todos.service';
import {TodoDto} from './dto/todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {
  }

  @Get()
  getTodos() {
    return this.todosService.getTodos();
  }

  @Post()
  addTodo(@Body() todoDto: TodoDto) {
    return this.todosService.addTodo(todoDto);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todosService.deleteTodo(id);
  }
}
