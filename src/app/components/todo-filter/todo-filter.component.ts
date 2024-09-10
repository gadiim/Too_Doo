// components/todo-filter/todo-filter.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';
import { TodoItem } from '../../models/todoItem';
import { TodoListService } from '../../services/todo-list.service';
import { mockTags } from '../../services/mock/mock-todo-tags';
import { mockPriority } from '../../services/mock/mock-todo-priority';

@Component({
  selector: 'app-todo-filter',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, FormsModule, DatePipe, UpperCasePipe],
  templateUrl: './todo-filter.component.html',
  styleUrl: './todo-filter.component.css'
})
export class TodoFilterComponent {

  todoItems: TodoItem[] = [];

  // @Input() todoItem: TodoItem = new TodoItem(0, '', new Date, '', [], '', 0, false);
  @Output() filteredTodo = new EventEmitter<{ priority: string, tag: string }>();
  @Output() todoAdded = new EventEmitter<void>();
  @Output() canceled = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  
  mockPriority = mockPriority;
  mockTags = mockTags;

  selectedPriority: string = '';
  isPriorityContainerVisible = false;

  selectedTag: string = '';
  isTagContainerVisible = false;

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

  onFilterChange(): void { // 
    this.filteredTodo.emit({
      priority: this.selectedPriority,
      tag: this.selectedTag
    });
    console.log('onFilterChange')
  }

}
