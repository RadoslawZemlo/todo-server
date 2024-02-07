import {Body, Controller, Get, Post} from '@nestjs/common';
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
}
