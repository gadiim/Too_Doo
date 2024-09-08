import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todoItem';
import { mockTodoItems } from './mock/mock-todoItems'; // mock
// import { dataTodoItems } from '../../assets/data/todo-items.json'; // JSON

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private todoItems: TodoItem[] = mockTodoItems;

  getTodoItems(): TodoItem[] {
    return this.todoItems;
  }

  getTodoItemById(id: number): TodoItem | undefined {
    return this.todoItems.find(t => t.id === id);
  }

  addTodoItem(todoItem: TodoItem): void {
    this.todoItems.push(todoItem);
  }

  updateTodoItemById(updatedTodoItem: TodoItem): void {
    const index = this.todoItems.findIndex(t => t.id === updatedTodoItem.id);
    if (index !== -1) {
      this.todoItems[index] = updatedTodoItem;
    }
  }

  deleteTodoItemById(id: number): void {
    this.todoItems = this.todoItems.filter(t => t.id !== id);
  }

  clearTodoItems(): void {
    this.todoItems = [];
  }
  
}
