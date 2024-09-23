// // services/project-list.service.ts
// // localStorage
import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})

export class ProjectListService {

  private storageProjectKey = 'projects';

  constructor() {}

  getProjects(): Project[] {
    const storedProjects = localStorage.getItem(this.storageProjectKey);
    return storedProjects ? JSON.parse(storedProjects) : []; 
  }


  addProject(project: Project): void {
    const projects = this.getProjects();
    projects.push(project);
    this.saveProjects(projects);
  }

  updateProjectById(updatedProject: Project): void {
    const projects = this.getProjects().map(item =>
      item.id === updatedProject.id ? updatedProject : item
    );
    this.saveProjects(projects);
  }

  deleteProjectById(id: number): void {
    const projects = this.getProjects().filter(item => item.id !== id); 
    this.saveProjects(projects);
  }

  private saveProjects(projects: Project[]): void {
    localStorage.setItem(this.storageProjectKey, JSON.stringify(projects));
  }

  clearAllProjects(): void {
    localStorage.removeItem(this.storageProjectKey);
  }

}
