// components/project-list/project-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgIf, NgFor, UpperCasePipe } from '@angular/common';
import { Project } from '../../models/project.model';
import { ProjectListService } from '../../services/project-list.service'; 
import { TodoItem } from '../../models/item.model';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-project-list',
  standalone: true, // компонент є самостійним
  imports: [CommonModule, NgIf, NgFor, UpperCasePipe],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  todoItems: TodoItem[] = [];
  projects: Project[] = [];
  
  // @Input()
  // @Output()
  @Output() projectEdited = new EventEmitter<Project>();

  constructor(
    private projectListService: ProjectListService,
    private todoListService: TodoListService,
  ) { }

  ngOnInit(): void {
    this.getProjects(); 
    this.getTodoItems();
  };

  ngOnChanges(): void {
    this.applyFilters();
  }

  getProjects(): void {
    this.projects = this.projectListService.getProjects();
  };

  applyFilters(): void {
    let filteredProjects = this.projectListService.getProjects ();
    this.projects = filteredProjects ;
  }

  getTodoItems(): void {
    this.todoItems = this.todoListService.getTodoItems();
    // this.applyFilters();
  }

  deleteTodoItemByProjectId(projectId: number): void {
    this.todoListService.deleteTodoItemByProjectId(projectId);
    this.getTodoItems();
  };

  deleteProjectById(id: number): void {
    const todoItems = this.todoListService.getTodoItems();
    const itemsToDelete = todoItems.filter(item => item.projectId === id);
    itemsToDelete.forEach(item => this.todoListService.deleteTodoItemById(item.id));
    this.projectListService.deleteProjectById(id);
    this.getProjects();
    this.getTodoItems();
  }

  // deleteProjectById(id: number): void {
  //   this.projectListService.deleteProjectById(id);
  //   this.getProjects();
  // };

  updateProjectById(updatedProject: Project): void {
    this.projectListService.updateProjectById(updatedProject);
    this.getProjects();
  };

  onProjectEdit(project: Project): void {
    this.projectEdited.emit(project);
  };

  // clearAllProjects(): void {
  //   const todoItems = this.todoListService.getTodoItems();
  //   const itemsToDelete = todoItems.filter(item => item.projectId > 0);
  //   console.log('Items to delete:', itemsToDelete);
  //   itemsToDelete.forEach(item => this.todoListService.deleteTodoItemById(item.id));
    
  //   this.projectListService.clearAllProjects();
  //   this.getProjects();
  //   this.getTodoItems();
  //   // this.applyFilters();
  // };

  // clearAllProjects(): void {
  //   this.projectListService.clearAllProjects();
  //   this.applyFilters();
  // };

  confirmDelete(projectId: number): void {
    const confirmation = confirm('Are you sure you want to delete this project? All associated tasks will also be deleted.');
    if (confirmation) {
      this.deleteProjectById(projectId);
    }
  };
}
