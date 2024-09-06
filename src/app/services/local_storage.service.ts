import { Injectable } from '@angular/core'; // Importing Injectable decorator from Angular core
import { TodoItem } from '../models/todo_item'; // Importing TodoItem model

@Injectable({
  providedIn: 'root' // This service will be provided in the root injector
})
export class LocalStorageService {

  private storageKey = 'todoItems'; // Key used to store and retrieve data from Local Storage

  constructor() { }

  saveTodoItems(todoItems: TodoItem[]): void {
    // Method to save TodoItems array to Local Storage
    localStorage.setItem(this.storageKey, JSON.stringify(todoItems));
  }

  loadTodoItems(): TodoItem[] {
    // Method to load TodoItems array from Local Storage
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : []; // Parse the data if it exists, otherwise return an empty array
  }
}
