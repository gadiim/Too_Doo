// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, DatePipe, NgForOf, NgIf } from '@angular/common';
import { TodoItem } from './models/item.model';
import { Project } from './models/project.model';
import { TodoFilter, defaultTodoFilter } from './models/filter.model';
import { TodoListService } from './services/todo-list.service';
import { ProjectListService } from './services/project-list.service';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFilterComponent } from './components/todo-filter/todo-filter.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoSearchComponent } from './components/todo-search/todo-search.component';
import { TodoSelectionComponent } from './components/todo-selection/todo-selection.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectListComponent } from "./components/project-list/project-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DatePipe, NgIf, NgForOf, TodoListComponent, TodoFormComponent, TodoFilterComponent, TodoSearchComponent, TodoSelectionComponent, ProjectFormComponent, ProjectListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(
    private todoListService: TodoListService,
    private projectListService: ProjectListService
  ) { }

  title = 'Too_Doo';

  todoItems: TodoItem[] = [];
  projects: Project[] = [];
 // //  // //  // //  // //  // //  // // 
 // current date
 today: Date = new Date();
 isDateVisible: boolean = false;

  toggleDateVisibility(): void {
    this.isDateVisible = !this.isDateVisible;
  }
  // //  // //  // //  // //  // //  // // 

  filters: TodoFilter = { ...defaultTodoFilter };
  
  isTodoFormVisible: boolean = false;

  selectedTodoItem: any = null; // changed for 'remove all'
  // selectedTodoItem: TodoItem = new TodoItem(0, '', new Date(), '', '', '', 0, false);

  
  // filters: { isCompleted: boolean | null, months: number, priority: string, tag: string } = {
  //   isCompleted: null,
  //   months: 0,
  //   priority: '',
  //   tag: ''
  // };

  searchQuery: string = '';

  onSearch(searchText: string): void {
    this.searchQuery = searchText;
  }

  isTodoListVisible: boolean = false;
  isProjectListVisible: boolean = true;

  viewList(): void {
    this.isTodoListVisible = true;
    this.isProjectListVisible = false;
  };

  viewProjects(): void {
    this.isTodoListVisible = false;
    this.isProjectListVisible = true;
  };

  isActiveList(type: 'todo' | 'project'): boolean {
    return type === 'todo' ? this.isTodoListVisible : this.isProjectListVisible;
  };

  //////////////////////////////////////
  toggleTodoFormVisibility(): void {
    this.isTodoFormVisible = !this.isTodoFormVisible;
  }

  // onTodoFormClosed(): void {
  //   this.isTodoFormVisible = false;
  // }

  showTodoForm(): void {
    this.isTodoFormVisible = true;
    this.selectedTodoItem = new TodoItem(0, '', new Date(), '', '', '', 0, false); // Для створення нової задачі
  }

  // closeTodoForm(): void {
  //   this.isTodoFormVisible = false;
  // }

  onTodoItemAdded(): void {
    this.toggleTodoFormVisibility(); // Закриває форму після збереження
  }

  onFormCanceled(): void {
    this.toggleTodoFormVisibility(); // Закриває форму після скасування
  }

  editTodoItem(todoItem: TodoItem): void {
    this.selectedTodoItem = todoItem; // Встановлюємо існуючий елемент для редагування
    this.isTodoFormVisible = true;
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

// project-form

  selectedProject: any = null;

  isProjectFormVisible: boolean = false;

  toggleProjectFormVisibility(): void {
    this.isProjectFormVisible = !this.isProjectFormVisible;
  }

  showProjectForm(): void {
    this.isProjectFormVisible = true;
    this.selectedProject = new Project(0, '', false);
  }

  onProjectAdded(): void {
    this.toggleProjectFormVisibility(); // Закриває форму після збереження
  }

  onProjectCanceled(): void {
    this.toggleProjectFormVisibility(); // Закриває форму після збереження
  }

  editProject(project: Project): void {
    this.selectedProject = project;
    this.isProjectFormVisible = true;
  }

  removeProjects(): void {
    const confirmation = confirm("Are you sure you want to delete all projects and their associated tasks?");

    if (confirmation) {
      const todoItems = this.todoListService.getTodoItems();
      const itemsToDelete = todoItems.filter(item => item.projectId > 0);
      itemsToDelete.forEach(item => {
        console.log(`Deleting todo item with id: ${item.id}`);
        this.todoListService.deleteTodoItemById(item.id);
      });
      this.projectListService.clearAllProjects();
      this.selectedProject = null;
    }
  };

  ////////////////////////

  reloadPage(): void {
    location.reload();
  }

  
}

