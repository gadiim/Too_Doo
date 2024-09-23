// components/project-list/project-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgIf, NgFor, UpperCasePipe } from '@angular/common';
import { Project } from '../../models/project.model';
import { ProjectListService } from '../../services/project-list.service'; 

@Component({
  selector: 'app-project-list',
  standalone: true, // компонент є самостійним
  imports: [CommonModule, NgIf, NgFor, UpperCasePipe],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  projects: Project[] = [];
  
  // @Input()
  // @Output()
  @Output() projectEdited = new EventEmitter<Project>();

  constructor(
    private projectListService: ProjectListService
  ) { }

  ngOnInit(): void {
    this.getProjects(); 
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

  deleteProjectById(id: number): void {
    this.projectListService.deleteProjectById(id);
    this.getProjects();
  };

  updateProjectById(updatedProject: Project): void {
    this.projectListService.updateProjectById(updatedProject);
    this.getProjects();
  };

  onProjectEdit(project: Project): void {
    this.projectEdited.emit(project);
  };

  clearAllProjects(): void {
    this.projectListService.clearAllProjects();
    this.applyFilters();
  };
}
