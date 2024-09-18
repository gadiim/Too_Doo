// // services/todo-list.service.ts
// import { Injectable } from '@angular/core';
// import { TodoItem } from '../models/todoItem';
// import { mockTodoItems } from './mock/mock-todoItems'; // mock
// // import { dataTodoItems } from '../../assets/data/todo-items.json'; // JSON

// @Injectable({
//   providedIn: 'root'
// })
// export class TodoListService {
//   private todoItems: TodoItem[] = mockTodoItems;
  

//   getTodoItems(): TodoItem[] {
//     return this.todoItems;
//   }

//   getTodoItemById(id: number): TodoItem | undefined {
//     return this.todoItems.find(t => t.id === id);
//   }

//   addTodoItem(todoItem: TodoItem): void {
//     this.todoItems.push(todoItem);
//   }

//   updateTodoItemById(updatedTodoItem: TodoItem): void {
//     const index = this.todoItems.findIndex(t => t.id === updatedTodoItem.id);
//     if (index !== -1) {
//       this.todoItems[index] = updatedTodoItem;
//     }
//   }

//   deleteTodoItemById(id: number): void {
//     this.todoItems = this.todoItems.filter(t => t.id !== id);
//   }

//   clearTodoItems(): void {
//     this.todoItems = [];
//   }
  
// }

// localStorage
import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todoItem.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private storageKey = 'todoItems';  // Додаємо ключ для LocalStorage

  // Отримання всіх елементів
  getTodoItems(): TodoItem[] {
    const storedItems = localStorage.getItem(this.storageKey); // Отримуємо дані з LocalStorage
    return storedItems ? JSON.parse(storedItems) : []; // Перевіряємо, чи є збережені дані
  }

  // Додавання нового елемента
  addTodoItem(todoItem: TodoItem): void {
    const todoItems = this.getTodoItems(); // Отримуємо поточні елементи з LocalStorage
    todoItems.push(todoItem); // Додаємо новий елемент
    this.saveTodoItems(todoItems); // Зберігаємо оновлений список
  }

  // Оновлення існуючого елемента за ID
  updateTodoItemById(updatedTodoItem: TodoItem): void {
    const todoItems = this.getTodoItems().map(item =>
      item.id === updatedTodoItem.id ? updatedTodoItem : item
    ); // Оновлюємо елемент по ID
    this.saveTodoItems(todoItems); // Зберігаємо оновлений список у LocalStorage
  }

  // Видалення елемента за ID
  deleteTodoItemById(id: number): void {
    const todoItems = this.getTodoItems().filter(item => item.id !== id); // Фільтруємо елементи, виключаючи той, який видаляємо
    this.saveTodoItems(todoItems); // Зберігаємо оновлений список у LocalStorage
  }

  // Збереження списку у LocalStorage
  private saveTodoItems(todoItems: TodoItem[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(todoItems)); // Зберігаємо список у LocalStorage у вигляді рядка JSON
  }

  // Очищення всіх елементів
  clearTodoItems(): void {
    localStorage.removeItem(this.storageKey); // Видаляємо всі елементи з LocalStorage
  }
}
