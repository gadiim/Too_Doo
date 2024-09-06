import { Injectable } from '@angular/core';
import { mockTodoItems } from './mock_todo_items';
import { TodoItem } from '../models/todo_item';

@Injectable({
    providedIn: 'root'
})

export class TodoItemService {

    private todoItems: TodoItem[] = mockTodoItems;
    
    constructor() { };

    getTodoItems(): TodoItem[] {
        return this.todoItems;
    };

    getTodoItem(id: number): TodoItem | undefined {
        return this.todoItems.find(t => t.id === id);
    };

    addTodoItem(todoItem: TodoItem): void {
        this.todoItems.push(todoItem);
    };

    updateTodoItem(updatedTodoItem: TodoItem): void {
        const index = this.todoItems.findIndex(t => t.id === updatedTodoItem.id);
        if (index !== -1) {
            this.todoItems[index] = updatedTodoItem;
        };
    };

    deleteTodoItem(id: number): void {
        this.todoItems = this.todoItems.filter(t => t.id !== id);
    };

    deleteTodoItems(): void {
        this.todoItems = [];
    };
};
