// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFilterComponent } from './components/todo-filter/todo-filter.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoSearchComponent } from './components/todo-search/todo-search.component';
import { TodoItem } from './models/todoItem';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, TodoListComponent, TodoFormComponent, TodoFilterComponent, TodoSearchComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Too_Doo';
  isFormVisible: boolean = false;
  selectedTodoItem: TodoItem = new TodoItem(0, '', new Date(), '', '', '', 0, false);

  filters = { priority: '', tag: '' };
  
  toggleFormVisibility(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  onFormClosed(): void {
    this.isFormVisible = false;
  }

  showForm(): void {
    this.isFormVisible = true;
    this.selectedTodoItem = new TodoItem(0, '', new Date(), '', '', '', 0, false); // Для створення нової задачі
  }

  closeForm(): void {
    this.isFormVisible = false;
  }

  onTodoItemAdded(): void {
    this.toggleFormVisibility(); // Закриває форму після збереження
  }

  onFormCanceled(): void {
    this.toggleFormVisibility(); // Закриває форму після скасування
  }

  editTodoItem(todoItem: TodoItem): void {
    this.selectedTodoItem = todoItem; // Встановлюємо існуючий елемент для редагування
    this.isFormVisible = true;
  }

  applyFilters(filters: { priority: string; tag: string }): void {
    this.filters = filters;
  }

}

