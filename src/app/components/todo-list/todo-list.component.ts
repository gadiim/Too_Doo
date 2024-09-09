// components/todo-list/todo-list.component.ts
import { Component, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../../models/todoItem';
import { TodoListService } from '../../services/todo-list.service';
import { NgForOf, DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, NgForOf, DatePipe],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoItems: TodoItem[] = [];

  @Output() edit = new EventEmitter<TodoItem>();  // Подія для редагування завдання

  constructor(private todoListService: TodoListService){}

  ngOnInit(): void {
    this.todoItems = this.todoListService.getTodoItems();
  }

  getTodoItems(): void {
   this.todoItems = this.todoListService.getTodoItems();
  }

  deleteTodoItemById(id: number): void {
    this.todoListService.deleteTodoItemById(id); 
    this.getTodoItems(); // Оновлення списку після видалення елемента
  }

  updateTodoItemById(updatedTodoItem: TodoItem): void {
    this.todoListService.updateTodoItemById(updatedTodoItem); 
    this.getTodoItems(); // Оновлення списку після редагування елемента
  }

  renewTodoList(): void {
    this.todoItems = this.todoListService.getTodoItems(); // Отримання списку завдань зі служби
  }

  // Метод для редагування елемента, який викликає подію редагування
  onEdit(todoItem: TodoItem): void {
    this.edit.emit(todoItem);
  }
}