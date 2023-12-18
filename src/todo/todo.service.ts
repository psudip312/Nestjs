import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
  create(createTodoDto: CreateTodoDto) {
    return 'This action adds a new todo';
  }

  findAll() {
    return `This action returns all todo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
