// services/todo-form.service.ts
import { Injectable } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { TodoItem } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoFormService {

  constructor(private todoListService: TodoListService) { }

  getMaxId(): number {
    const todoItems = this.todoListService.getTodoItems();
    return Math.max(...todoItems.map(t => t.id), 0);
  }

  saveTodoItem(todoItem: TodoItem): void {
    if (!todoItem.id) {
      const maxId = this.getMaxId();
      todoItem.id = maxId + 1;
    }
    this.todoListService.addTodoItem(todoItem);
  }

  updateTodoItem(todoItem: TodoItem): void {
    if (todoItem.id) {
      this.todoListService.updateTodoItemById(todoItem);
    }
  }
}
