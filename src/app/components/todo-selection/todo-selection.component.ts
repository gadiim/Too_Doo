import { Component, Input } from '@angular/core';
import { TodoFilter, defaultTodoFilter } from '../../models/filter.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-selection.component.html',
  styleUrl: './todo-selection.component.css'
})
export class TodoSelectionComponent {
  @Input() filters: TodoFilter = {  ...defaultTodoFilter  };
}

