// components/todo-filter/todo-filter.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf, NgFor, UpperCasePipe, DatePipe } from '@angular/common';
import { TodoItem } from '../../models/todoItem';
import { TodoListService } from '../../services/todo-list.service';
import { mockTags } from '../../services/mock/mock-todo-tags';
import { mockPriority } from '../../services/mock/mock-todo-priority';
import { DAYS } from '../../services/mock/mock-days';
import { MONTHS } from '../../services/mock/mock-months';
import { TodoFilter, defaultTodoFilter } from '../../models/filter.model';
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
  @Output() filteredTodo = new EventEmitter<TodoFilter>();
  @Output() todoAdded = new EventEmitter<void>();
  @Output() canceled = new EventEmitter<void>();
  @Output() closed = new EventEmitter<void>();

  days = DAYS;
  
  months = MONTHS;
  mockPriority = mockPriority;
  mockTags = mockTags;

  selectedIsCompleted: boolean | null = null;
  isIsCompletedContainerVisible = false;

  // selectedDay: number = 0;
  selectedDays: number[] = []; // !!!
  isDayContainerVisible = false;

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
// // // // // // // // // // // // // // // // // //
// // IsCompleted
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
// // // // // // // // // // // // // // // // // //
// // Day
toggleDayContainer() {
  this.isDayContainerVisible = !this.isDayContainerVisible;
}

// highlightDay(day: number) {
//   this.selectedDay = day;
//   this.onFilterChange();
// }

highlightDay(day: number) {
  const index = this.selectedDays.indexOf(day);
  if (index === -1) {
    this.selectedDays.push(day); // Додаємо новий день, якщо він ще не вибраний
  } else {
    this.selectedDays.splice(index, 1); // Видаляємо день, якщо він вже вибраний
  }
  this.onFilterChange();
}

// clearDay() {
//   this.selectedDay = 0;
//   this.onFilterChange();
// }

clearDay() {
  this.selectedDays = []; // Очищуємо вибір днів
  this.onFilterChange();
}

// // // // // // // // // // // // // // // // // //
// // Months
  toggleMonthsContainer() {
    this.isMonthsContainerVisible = !this.isMonthsContainerVisible;
  }

  highlightMonth(month: number) {
    this.selectedMonth = month;
    this.onFilterChange();
    console.log('month: ' + month)
  }

  clearMonth() {
    this.selectedMonth = 0;
    this.onFilterChange();
  }
// // // // // // // // // // // // // // // // // //
// // Priority
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
// // // // // // // // // // // // // // // // // //
// // Tag
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
// // // // // // // // // // // // // // // // // //
  // onFilterChange(): void { 
  //   this.filteredTodo.emit({
  //     isCompleted: this.selectedIsCompleted,
  //     day: this.selectedDay,
  //     months: this.selectedMonth,
  //     priority: this.selectedPriority,
  //     tag: this.selectedTag,
      
  //   });
    onFilterChange(): void {
      this.filteredTodo.emit({
        isCompleted: this.selectedIsCompleted,
        days: this.selectedDays, // Відправляємо масив днів
        months: this.selectedMonth,
        priority: this.selectedPriority,
        tag: this.selectedTag
      });
    }
  



  clearFilters(): void {
    this.selectedIsCompleted = null;
    this.selectedDays = [];
    this.selectedMonth = 0;
    this.selectedPriority = '';
    this.selectedTag = '';
    
    this.onFilterChange();
  }

}
