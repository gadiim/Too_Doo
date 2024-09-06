import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo_item';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storageKey = 'todoItems';

  constructor() { }

  saveTodoItems(todoItems: TodoItem[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(todoItems));
  }

  loadTodoItems(): TodoItem[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }
}
