// components/todo-list/todo-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgForOf, DatePipe } from '@angular/common';
import { TodoItem } from '../../models/todoItem.model';
import { TodoFilterComponent } from '../todo-filter/todo-filter.component';
import { TodoListService } from '../../services/todo-list.service';
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

  ngOnInit(): void {   //список завдань з mock або LocalStorage при ініціалізації
    this.getTodoItems(); 
  }

  ngOnChanges(): void {
    console.log('Filters changed:', this.filters);
    this.applyFilters();
  }



  getTodoItems(): void {
    console.log(this.todoListService.getTodoItems());
    this.todoItems = this.todoListService.getTodoItems();
    this.applyFilters(); // фільтруємо !
  }
  /// filter block begin
  // // // // // // // // // // //
  // search
  onSearch(searchText: string): void {
    this.searchQuery = searchText;
    this.applyFilters();
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
        // if дата є об'єктом Date та чи входить день у filtered
        return dueDate instanceof Date && this.filters.days.includes(dueDate.getDate());
      });
    }

    if (this.filters.months > 0) {
      filteredItems = filteredItems.filter(item => {
        // рядок у дату, if необхідно
        const dueDate = typeof item.dueDate === 'string' ? new Date(item.dueDate) : item.dueDate;
        // if об'єкт Date => getMonth()
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
      filteredItems = filteredItems.filter(item => 
          item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
          ||
          item.description.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
    this.todoItems = filteredItems;  // виводим на дисплей
  
  }
  /// filter block end

  deleteTodoItemById(id: number): void {
    this.todoListService.deleteTodoItemById(id); // видалення елемента
    this.getTodoItems(); // оновлення todo-list після видалення елемента
  }

  updateTodoItemById(updatedTodoItem: TodoItem): void {
    this.todoListService.updateTodoItemById(updatedTodoItem); // оновлення елемента
    this.getTodoItems(); // update todo-list
  }

  onEdit(todoItem: TodoItem): void {
    this.edit.emit(todoItem);
  }

  clearTodoItems(): void {
    this.todoListService.clearTodoItems();
    this.getTodoItems(); // оновлення!!!
  };

}
