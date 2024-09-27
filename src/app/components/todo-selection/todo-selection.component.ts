// components/todo-selection/todo-selection.component.ts
import { Component, Input } from '@angular/core';
import { TodoFilter, defaultTodoFilter } from '../../models/filter.model';
import { CommonModule } from '@angular/common';
import { mockMonths } from '../../services/mock/mock-months';
import { Project } from '../../models/project.model';
import { ProjectListService } from '../../services/project-list.service'; 

@Component({
  selector: 'app-todo-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-selection.component.html',
  styleUrl: './todo-selection.component.css'
})
export class TodoSelectionComponent {
  @Input() filters: TodoFilter = {  ...defaultTodoFilter  };

  projects: Project[] = [];

constructor(
    private projectListService: ProjectListService ) {}
    
    ngOnInit(): void {
      this.getProjects();
    }

    getProjects(): void {
      this.projects = this.projectListService.getProjects();
    };

  getMonthName(monthNumber: number): string {
    const month = mockMonths.find(m => m.id === monthNumber);
    return month ? month.name : '';
  }

}

