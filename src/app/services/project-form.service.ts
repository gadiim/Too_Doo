// services/project-form.service.ts
import { Injectable } from '@angular/core';
import { ProjectListService } from './project-list.service';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectFormService {

  constructor(private projectListService: ProjectListService) { }

  getMaxId(): number {
    const projects = this.projectListService.getProjects();
    return Math.max(...projects.map(t => t.id), 0);
  }

  saveProject(project: Project): void {
    if (!project.id) {
      const maxId = this.getMaxId();
      project.id = maxId + 1;
    }
    this.projectListService.addProject(project);
  }

  updateProject(project: Project): void {
    if (project.id) {
      this.projectListService.updateProjectById(project);
    }
  }
}
