// components/todo-filter/todo-filter.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, UpperCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { TodoItem } from '../../models/todoItem';
import { TodoListService } from '../../services/todo-list.service';
import { mockTags } from '../../services/mock/mock-todo-tags';
import { mockPriority } from '../../services/mock/mock-todo-priority';

@Component({
  selector: 'app-todo-filter',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, DatePipe, UpperCasePipe],
  templateUrl: './todo-filter.component.html',
  styleUrl: './todo-filter.component.css'
})
export class TodoFilterComponent {

  todoItems: TodoItem[] = [];

  // @Input() todoItem: TodoItem = new TodoItem(0, '', new Date, '', [], '', 0, false);
  @Output() todoAdded = new EventEmitter<void>();
  @Output() canceled = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  
  mockPriority = mockPriority;
  mockTags = mockTags;

  selectedPriority: any;
  isPriorityContainerVisible = true;

  selectedTag: any;
  isTagContainerVisible = true;

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.todoItems = this.todoListService.getTodoItems();
  }


  highlightPriority(todoPriority: any) {
    this.selectedPriority = todoPriority;
  }

  togglePriorityContainer() {
    this.isPriorityContainerVisible = !this.isPriorityContainerVisible;
  }

  clearPriority() {
    this.selectedPriority = '';
  }
  
  highlightTag(todoTag: any) {
    this.selectedTag = todoTag;
  }

  toggleTagContainer() {
    this.isTagContainerVisible = !this.isTagContainerVisible;
  }
  
  clearTag() {
    this.selectedTag = '';
  }

}
