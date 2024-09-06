import { Injectable } from '@angular/core';                         // Importing Injectable decorator from Angular core
import { TodoItem } from '../models/todo_item';                     // Importing TodoItem model
import { LocalStorageService } from './local_storage.service';      // Importing LocalStorageService
import { mockTodoItems } from './mock_todo_items';                  // Importing mock data for TodoItems

@Injectable({
    providedIn: 'root'                                                // This service will be provided in the root injector
})
export class TodoItemService {

    private todoItems: TodoItem[] = [];                             // Array to hold TodoItems

    constructor(private localStorageService: LocalStorageService) { // Initializing todoItems with data from LocalStorage or mock data
        this.todoItems = this.localStorageService.loadTodoItems() || mockTodoItems;
    }

    getTodoItems(): TodoItem[] {                                        // Method to get all TodoItems
        return this.todoItems;
    }

    getTodoItem(id: number): TodoItem | undefined {                     // Method to get a single TodoItem by id
        return this.todoItems.find(t => t.id === id);
    }

    addTodoItem(todoItem: TodoItem): void {                             // Method to add a new TodoItem
        this.todoItems.push(todoItem);
        this.localStorageService.saveTodoItems(this.todoItems); // Save updated list to LocalStorage
    }

    updateTodoItem(updatedTodoItem: TodoItem): void {           // Method to update an existing TodoItem
        const index = this.todoItems.findIndex(t => t.id === updatedTodoItem.id);
        if (index !== -1) {
            this.todoItems[index] = updatedTodoItem;
            this.localStorageService.saveTodoItems(this.todoItems); // Save updated list to LocalStorage
        }
    }

    deleteTodoItem(id: number): void {                      // Method to delete a TodoItem by id
        this.todoItems = this.todoItems.filter(t => t.id !== id);
        this.localStorageService.saveTodoItems(this.todoItems); // Save updated list to LocalStorage
    }

    deleteTodoItems(): void {                           // Method to delete all TodoItems
        this.todoItems = [];
        this.localStorageService.saveTodoItems(this.todoItems); // Save updated list to LocalStorage
    }
}
