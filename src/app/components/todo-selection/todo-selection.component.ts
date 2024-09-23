// components/todo-selection/todo-selection.component.ts
import { Component, Input } from '@angular/core';
import { TodoFilter, defaultTodoFilter } from '../../models/filter.model';
import { CommonModule } from '@angular/common';
import { mockMonths } from '../../services/mock/mock-months';

@Component({
  selector: 'app-todo-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-selection.component.html',
  styleUrl: './todo-selection.component.css'
})
export class TodoSelectionComponent {
  @Input() filters: TodoFilter = {  ...defaultTodoFilter  };

  getMonthName(monthNumber: number): string {
    const month = mockMonths.find(m => m.id === monthNumber);
    return month ? month.name : '';
  }

}

