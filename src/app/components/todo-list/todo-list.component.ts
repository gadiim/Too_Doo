import { Component } from '@angular/core'; // Importing Component decorator from Angular core
import { TodoItem } from '../../models/todo_item'; // Importing TodoItem model
import { TodoItemService } from '../../services/todo_item.service'; // Importing TodoItemService

@Component({
  selector: 'app-todo-list', // Selector for the component
  standalone: true, // Indicates that this component is standalone
  imports: [], // List of modules to import (currently empty)
  templateUrl: './todo-list.component.html', // Path to the component's HTML template
  styleUrl: './todo-list.component.css' // Path to the component's CSS styles
})
export class TodoListComponent {
  todoItems: TodoItem[] = []; // Array to hold TodoItems

  constructor(private todoItemService: TodoItemService){}; // Injecting TodoItemService

  ngOnInit(): void {
    // Lifecycle hook that runs after the component's view has been initialized
    this.todoItems = this.todoItemService.getTodoItems(); // Fetching TodoItems from the service
  }

  deleteTodoItem(id: number): void {
    // Method to delete a TodoItem by id
    this.todoItemService.deleteTodoItem(id); // Deleting the item using the service
    this.todoItems = this.todoItemService.getTodoItems(); // Refreshing the list of TodoItems
  }

  updateTodoItem(updatedTodoItem: TodoItem): void {
    // Method to update an existing TodoItem
    this.todoItemService.updateTodoItem(updatedTodoItem); // Updating the item using the service
    this.todoItems = this.todoItemService.getTodoItems(); // Refreshing the list of TodoItems
  }
}
