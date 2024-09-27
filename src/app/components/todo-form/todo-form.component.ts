// components/todo-form/todo-form.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';
import { TodoItem } from '../../models/item.model';
import { TodoFormService } from '../../services/todo-form.service';
import { mockTags } from '../../services/mock/mock-todo-tags';
import { mockPriority } from '../../services/mock/mock-todo-priority';
import { Project } from '../../models/project.model';
import { ProjectListService } from '../../services/project-list.service'; 


@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, DatePipe, UpperCasePipe],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Input() todoItem: TodoItem = new TodoItem(0, '', new Date(), '', '', '', 0, false);
  @Output() todoAdded = new EventEmitter<void>();
  @Output() canceled = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  mockTags = mockTags;
  mockPriority = mockPriority;
  projects: Project[] = [];

  constructor(
    private todoFormService: TodoFormService,
    private projectListService: ProjectListService
  ) 
  {  
    this.projects = this.projectListService.getProjects()
  }

  onTodoSave(): void {
    if (!this.todoItem.title) {
      alert('Please select a title!');
      return;
    }

    if (!this.todoItem.id) {
      this.todoFormService.saveTodoItem(this.todoItem);
    } else {
      this.todoFormService.updateTodoItem(this.todoItem);
    }
    this.todoAdded.emit();          // Сповіщення про додавання/оновлення завдання 
  }

  onTodoCancel(): void {
    this.canceled.emit();
    this.closeTodoForm();
  }

  closeTodoForm(): void {
    this.closed.emit();
  }
}
