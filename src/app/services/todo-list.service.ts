// // services/todo-list.service.ts
// // localStorage
import { Injectable } from '@angular/core';
import { TodoItem } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  
  private storageTodoKey = 'todoItems';  // ключ для LocalStorage

  // Отримання всіх елементів
  getTodoItems(): TodoItem[] {
    const storedItems = localStorage.getItem(this.storageTodoKey); // Отримуємо дані з LocalStorage
    // return storedItems ? JSON.parse(storedItems) : []; // Перевіряємо, чи є збережені дані
    try {
      return storedItems ? JSON.parse(storedItems) : [];
    } catch (error) {
      console.error('Error parsing todo items from LocalStorage', error);
      return [];
    }
  }

  addTodoItem(todoItem: TodoItem): void {
    const todoItems = this.getTodoItems();
    todoItems.push(todoItem);
    this.saveTodoItems(todoItems);
  }

  updateTodoItemById(updatedTodoItem: TodoItem): void {
    const todoItems = this.getTodoItems().map(item =>
      item.id === updatedTodoItem.id ? updatedTodoItem : item
    );
    this.saveTodoItems(todoItems); 
  }

  deleteTodoItemById(id: number): void {
    const todoItems = this.getTodoItems().filter(item => item.id !== id); // Фільтруємо елементи, виключаючи той, який видаляємо
    this.saveTodoItems(todoItems); // Зберігаємо оновлений список у LocalStorage
  }

  private saveTodoItems(todoItems: TodoItem[]): void {
    localStorage.setItem(this.storageTodoKey, JSON.stringify(todoItems)); // Зберігаємо список у LocalStorage у вигляді рядка JSON
  }

  clearTodoItems(): void {
    localStorage.removeItem(this.storageTodoKey); // Видаляємо всі елементи з LocalStorage
  }
}

