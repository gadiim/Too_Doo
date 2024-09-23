
// // services/todo-list.service.ts
// // localStorage
import { Injectable } from '@angular/core';
import { TodoItem } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  
  private storageTodoKey = 'todoItems';  // Додаємо ключ для LocalStorage

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

  // Видалення елемента за ID
  deleteTodoItemById(id: number): void {
    const todoItems = this.getTodoItems().filter(item => item.id !== id); // Фільтруємо елементи, виключаючи той, який видаляємо
    this.saveTodoItems(todoItems); // Зберігаємо оновлений список у LocalStorage
  }

  // Збереження списку у LocalStorage
  private saveTodoItems(todoItems: TodoItem[]): void {
    localStorage.setItem(this.storageTodoKey, JSON.stringify(todoItems)); // Зберігаємо список у LocalStorage у вигляді рядка JSON
  }

  // Очищення всіх елементів
  clearTodoItems(): void {
    localStorage.removeItem(this.storageTodoKey); // Видаляємо всі елементи з LocalStorage
  }

}
// // services/todo-list.service.ts

// import { Injectable } from '@angular/core';
// import { TodoItem } from '../models/todoItem.model';
// import { mockTodoItems } from './mock/mock-todoItems'; // mock

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

//   getTodosForToday(): TodoItem[] {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0); // Задати час на початок дня

//     return this.todoItems.filter(item => {
//       const dueDate = typeof item.dueDate === 'string' ? new Date(item.dueDate) : item.dueDate;
//       return dueDate instanceof Date && dueDate.setHours(0, 0, 0, 0) === today.getTime();
//     });
//   }

//   getTodosForWeek(): number[] {
//     const today = new Date();
//     const currentDay = today.getDay(); // Поточний день тижня (0 - неділя, 6 - субота)
    
//     // Визначаємо дати початку і кінця тижня
//     const startOfWeek = new Date(today);
//     startOfWeek.setDate(today.getDate() - currentDay); // Змінюємо дату на неділю
  
//     const endOfWeek = new Date(today);
//     endOfWeek.setDate(today.getDate() + (6 - currentDay)); // Змінюємо дату на суботу
  
//     const weekDays = [];
    
//     // Перебираємо дні тижня
//     for (let date = startOfWeek; date <= endOfWeek; date.setDate(date.getDate() + 1)) {
//       const day = date.getDate();
//       // Додаємо день до масиву, якщо задача є в цей день
//       if (this.todoItems.some(item => new Date(item.dueDate).getDate() === day)) {
//         weekDays.push(day);
//       }
//     }
    
//     return weekDays;
//   }

//   getTodosForMonth(): TodoItem[] {
//     const today = new Date();
//     const currentYear = today.getFullYear();
//     const currentMonth = today.getMonth(); // Місяць (0-11)
  
//     return this.todoItems.filter(item => {
//       const dueDate = typeof item.dueDate === 'string' ? new Date(item.dueDate) : item.dueDate;
//       return (
//         dueDate instanceof Date &&
//         dueDate.getFullYear() === currentYear &&
//         dueDate.getMonth() === currentMonth
//       );
//     });
//   }

//   getTodosOlderThanToday(): TodoItem[] {
//     const today = new Date();
    
//     return this.todoItems.filter(item => {
//       const dueDate = typeof item.dueDate === 'string' ? new Date(item.dueDate) : item.dueDate;
//       return dueDate instanceof Date && dueDate < today; // Перевірка, чи дата менша за сьогодні
//     });
//   }

// }

