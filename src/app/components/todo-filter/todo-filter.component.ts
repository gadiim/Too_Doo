// components/todo-filter/todo-filter.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';
import { TodoItem } from '../../models/todoItem';
import { TodoListService } from '../../services/todo-list.service';
import { mockTags } from '../../services/mock/mock-todo-tags';
import { mockPriority } from '../../services/mock/mock-todo-priority';
import { MONTHS } from '../../services/mock/mock-months';
import { log } from 'console';

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
  @Output() filteredTodo = new EventEmitter<{ isCompleted: boolean | null, months: number, priority: string, tag: string, }>();
  @Output() todoAdded = new EventEmitter<void>();
  @Output() canceled = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  months = MONTHS;
  mockPriority = mockPriority;
  mockTags = mockTags;

  selectedIsCompleted: boolean | null = null;
  isIsCompletedContainerVisible = false;

  selectedMonth: number = 0;
  isMonthsContainerVisible = false;

  selectedPriority: string = '';
  isPriorityContainerVisible = false;

  selectedTag: string = '';
  isTagContainerVisible = false;

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.todoItems = this.todoListService.getTodoItems();
    this.onFilterChange();
  }

  highlightIsCompleted(todoIsCompleted: boolean) {
    this.selectedIsCompleted = todoIsCompleted;
    this.onFilterChange();
  }

  toggleIsCompletedContainer() {
    this.isIsCompletedContainerVisible = !this.isIsCompletedContainerVisible;
  }

  clearIsCompleted() {
    this.selectedIsCompleted = null;//null
    this.onFilterChange();
  }

  toggleMonthsContainer() {
    this.isMonthsContainerVisible = !this.isMonthsContainerVisible;
  }

  highlightMonth(month: number) {
    this.selectedMonth = month;
    this.onFilterChange();
    console.log('month ' + month)
  }

  clearMonth() {
    this.selectedMonth = 0;
    this.onFilterChange();
  }

  highlightPriority(todoPriority: string) {
    this.selectedPriority = todoPriority;
    this.onFilterChange();
  }

  togglePriorityContainer() {
    this.isPriorityContainerVisible = !this.isPriorityContainerVisible;
  }

  clearPriority() {
    this.selectedPriority = '';
    this.onFilterChange();
  }
  
  highlightTag(todoTag: string) {
    this.selectedTag = todoTag;
    this.onFilterChange();
  }

  toggleTagContainer() {
    this.isTagContainerVisible = !this.isTagContainerVisible;
  }
  
  clearTag() {
    this.selectedTag = '';
    this.onFilterChange();
  }

  onFilterChange(): void { 
    this.filteredTodo.emit({
      isCompleted: this.selectedIsCompleted,
      months: this.selectedMonth,
      priority: this.selectedPriority,
      tag: this.selectedTag,
      
    });
  }

  clearFilters(): void {
    this.selectedIsCompleted = null;
    this.selectedMonth = 0;
    this.selectedPriority = '';
    this.selectedTag = '';
    
    this.onFilterChange();
  }

}
