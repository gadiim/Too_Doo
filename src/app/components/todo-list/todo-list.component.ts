// components/todo-list/todo-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../../models/todoItem';
import { TodoFilterComponent } from '../todo-filter/todo-filter.component';
import { TodoListService } from '../../services/todo-list.service';
import { NgForOf, DatePipe } from '@angular/common';
import { mockPriority } from '../../services/mock/mock-todo-priority';
import { TodoFilter, defaultTodoFilter } from '../../models/filter.model';
import { TodoSearchComponent } from '../todo-search/todo-search.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, NgForOf, DatePipe, TodoFilterComponent, TodoSearchComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoItems: TodoItem[] = [];
  // searchQuery: string = '';

  @Input() filters: TodoFilter = { ...defaultTodoFilter };
  @Output() edit = new EventEmitter<TodoItem>();
  @Input() searchQuery: string = '';

  mockPriority = mockPriority;

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.getTodoItems();
  }

  ngOnChanges(): void {
    console.log('Filters changed:', this.filters);
    this.applyFilters();
  }



  getTodoItems(): void {
    this.todoItems = this.todoListService.getTodoItems();
    this.applyFilters(); // Фільтруємо при отриманні задач
  }
  /// filter block begin

  getMonthFromDate(date: string): string {
    return date.slice(5, 7);
  }

  toString(data: number): string {
    return data < 10 ? '0' + data : String(data); //id XX = data XX number -> string
  }

  // // // // // // // // // // //
  // search
  onSearch(searchText: string): void {
    this.searchQuery = searchText;
    this.applyFilters();
    console.log('todo-list.component.ts - onSearch(searchText: string)');
  }
  // // // // // // // // // // //

  applyFilters(): void {
    let filteredItems = this.todoListService.getTodoItems();

    if (this.filters.isCompleted !== null) {
      filteredItems = filteredItems.filter(item => item.isCompleted === this.filters.isCompleted);
    }

    if (this.filters.days.length > 0) {
      filteredItems = filteredItems.filter(item => {
        const dueDate = typeof item.dueDate === 'string' ? new Date(item.dueDate) : item.dueDate;
        // Перевіряємо, чи дата є об'єктом Date та чи входить день у масив фільтрів
        return dueDate instanceof Date && this.filters.days.includes(dueDate.getDate());
      });
    }




    if (this.filters.months > 0) {
      filteredItems = filteredItems.filter(item => {
        // Перетворюємо рядок у дату, якщо це необхідно
        const dueDate = typeof item.dueDate === 'string' ? new Date(item.dueDate) : item.dueDate;

        // Перевіряємо, чи дійсно це об'єкт Date, перед тим як викликати getMonth()
        return dueDate instanceof Date && (dueDate.getMonth() + 1) === this.filters.months;
      });
    }

    if (this.filters.priority) {
      filteredItems = filteredItems.filter(item => item.priority === this.filters.priority);
    }

    if (this.filters.tag) {
      filteredItems = filteredItems.filter(item => item.tag === this.filters.tag);
    }

    // search
    if (this.searchQuery) {
      filteredItems = filteredItems.filter(item => item.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
      console.log('todo-list.component.ts - applyFilters()');

    }

    this.todoItems = filteredItems;
  }

  /// filter block end

  deleteTodoItemById(id: number): void {
    this.todoListService.deleteTodoItemById(id);
    this.getTodoItems(); // Оновлення списку після видалення елемента
  }

  updateTodoItemById(updatedTodoItem: TodoItem): void {
    this.todoListService.updateTodoItemById(updatedTodoItem);
    this.getTodoItems(); // update list
  }

  onEdit(todoItem: TodoItem): void {
    this.edit.emit(todoItem);
  }

  clearTodoItems(): void {
    this.todoListService.clearTodoItems();
    this.getTodoItems();
  };

}
