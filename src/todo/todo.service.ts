import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.interface'; // Adjust the path accordingly

@Injectable()
export class TodoService {
  private todos = [];
  private currentId = 1;

  servicecreate(createTodoDto: CreateTodoDto) {
    const newTodo: Todo = {
      id: this.currentId++,
      title: createTodoDto.title,
      description: createTodoDto.description,
      // Add other fields as needed
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) {
      throw new NotFoundException(`Todo with id #${id} not found`);
    }
    return todo;
  }

  remove(id: number) {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException(`Todo with id #${id} not found`);
    }
    const removedTodo = this.todos.splice(index, 1)[0];
    return removedTodo;
  }
}
