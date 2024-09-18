// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFilterComponent } from './components/todo-filter/todo-filter.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoSearchComponent } from './components/todo-search/todo-search.component';
import { TodoListService } from './services/todo-list.service';
import { TodoItem } from './models/todoItem.model';
import { CommonModule, DatePipe, NgForOf, NgIf } from '@angular/common';
import { TodoFilter, defaultTodoFilter } from './models/filter.model';
import { TodoSelectionComponent } from './components/todo-selection/todo-selection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DatePipe, NgIf, NgForOf, TodoListComponent, TodoFormComponent, TodoFilterComponent, TodoSearchComponent, TodoSelectionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private todoListService: TodoListService) {}
  title = 'Too_Doo';
 // //  // //  // //  // //  // //  // // 
 today: Date = new Date();
 isDateVisible: boolean = false;

  toggleDateVisibility(): void {
    this.isDateVisible = !this.isDateVisible;
  }
  // //  // //  // //  // //  // //  // // 

  filters: TodoFilter = { ...defaultTodoFilter };
  
  isFormVisible: boolean = false;

  selectedTodoItem: any = null; // changed for 'remove all'
  // selectedTodoItem: TodoItem = new TodoItem(0, '', new Date(), '', '', '', 0, false);

  
  // filters: { isCompleted: boolean | null, months: number, priority: string, tag: string } = {
  //   isCompleted: null,
  //   months: 0,
  //   priority: '',
  //   tag: ''
  // };

  searchQuery: string = '';

  // Обробник пошуку
  onSearch(searchText: string): void {
    this.searchQuery = searchText;
    console.log('app.component.ts - onSearch(searchText: string)');
  }

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

  // applyFilters(filters: { isCompleted: boolean | null, months: number, priority: string, tag: string }): void {
  applyFilters(filters: any): void {
    this.filters = filters;  
  }

  removeTodoItems(): void {
    this.todoListService.clearTodoItems();
    this.filters = { ...defaultTodoFilter };  // Використання дефолтних значень фільтра
    this.selectedTodoItem = null;  // Скидання вибраного елементу
  }

  reloadPage(): void {
    location.reload();
  }

  
}

