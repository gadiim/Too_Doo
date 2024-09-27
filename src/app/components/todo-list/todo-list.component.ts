// components/todo-list/todo-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgForOf, DatePipe, NgIf, NgFor } from '@angular/common';
import { TodoItem } from '../../models/item.model';
import { TodoFilter, defaultTodoFilter } from '../../models/filter.model';
import { TodoListService } from '../../services/todo-list.service';
import { mockPriority } from '../../services/mock/mock-todo-priority';
import { TodoFilterComponent } from '../todo-filter/todo-filter.component';
import { TodoSearchComponent } from '../todo-search/todo-search.component';
import { Project } from '../../models/project.model';
import { ProjectListService } from '../../services/project-list.service'; 


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, NgForOf, DatePipe, TodoFilterComponent, TodoSearchComponent],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todoItems: TodoItem[] = [];
  projects: Project[] = [];

  @Input() filters: TodoFilter = { ...defaultTodoFilter };
  @Output() edit = new EventEmitter<TodoItem>();
  @Input() searchQuery: string = '';

  mockPriority = mockPriority;

  constructor(
    private todoListService: TodoListService,
    private projectListService: ProjectListService
  )
  {}


  ngOnInit(): void {   //список завдань з mock або LocalStorage при ініціалізації
    this.getTodoItems(); 
    this.getProjects();
  }

  ngOnChanges(): void {
    this.applyFilters();
  }

  getTodoItems(): void {
    this.todoItems = this.todoListService.getTodoItems();
    this.applyFilters(); // фільтруємо !
  }

  getProjects(): void {
    this.projects = this.projectListService.getProjects();
  };
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

    // const today = new Date();
    // today.setHours(0, 0, 0, 0);



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

    if (this.filters.project) {
      filteredItems = filteredItems.filter(item => item.projectId == this.filters.project);
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

    // if (this.filters.isToday) { // Перевірка, чи потрібно фільтрувати за сьогодні
    //   const today = new Date();
    //   filteredItems = filteredItems.filter(item => {
    //     const dueDate = typeof item.dueDate === 'string' ? new Date(item.dueDate) : item.dueDate;
    //     return dueDate instanceof Date && dueDate.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0);
    //   });
    // }
  
    this.todoItems = filteredItems;  // виводим на дисплей
  }



  /// filter block end

  deleteTodoItemById(id: number): void {
    this.todoListService.deleteTodoItemById(id); // видалення елемента
    this.getTodoItems(); // оновлення todo-list після видалення елемента
  }

  // deleteTodoItemByProjectId(projectId: number): void {
  //   this.todoListService.deleteTodoItemById(projectId);
  //   this.getTodoItems(); // оновлення todo-list після видалення елемента
  // }

  // updateTodoItemById(updatedTodoItem: TodoItem): void {
  //   this.todoListService.updateTodoItemById(updatedTodoItem); // оновлення елемента
  //   this.getTodoItems(); // update todo-list
  // }

  onEdit(todoItem: TodoItem): void {
    this.edit.emit(todoItem);
  }

  clearTodoItems(): void {
    this.todoListService.clearTodoItems();
    // this.getTodoItems(); // оновлення!!!
    this.applyFilters();
  };

}
