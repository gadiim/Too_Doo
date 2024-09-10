// components/todo-form/todo-form.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, UpperCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { TodoItem } from '../../models/todoItem';
import { TodoListService } from '../../services/todo-list.service';
import { mockTags } from '../../services/mock/mock-todo-tags';
import { mockPriority } from '../../services/mock/mock-todo-priority';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, DatePipe, UpperCasePipe],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Input() todoItem: TodoItem = new TodoItem(0, '', new Date, '', '', '', 0, false);
  @Output() todoAdded = new EventEmitter<void>(); // Додаємо EventEmitter для сповіщення про додавання елемента
  @Output() canceled = new EventEmitter<void>(); // Подія для інформування батьківського компонента
  @Output() closed = new EventEmitter<void>();
  
  mockTags = mockTags;            // Додаємо mockTags до компонента
  mockPriority = mockPriority;    // Додаємо mockRatings до компонента

  constructor(private todoListService: TodoListService) { }

  onSave(): void {
    if (!this.todoItem.id) {
      const maxId = Math.max(...this.todoListService.getTodoItems().map(t => t.id), 0);
      this.todoItem.id = maxId + 1;
      this.todoListService.addTodoItem(this.todoItem);
      this.todoAdded.emit(); // Сповіщення про додавання нового завдання
    }
    this.closeForm(); // Закриває форму після збереження
  }

  onCancel(): void {
    this.canceled.emit(); // Викидаємо подію для батьківського компонента
    this.closeForm(); // Закриває форму після скасування
  }

  closeForm(): void {
    this.closed.emit(); // Викидаємо подію для батьківського компонента
  }
}
