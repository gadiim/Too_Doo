// components/search/search.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class TodoSearchComponent {
  searchText: string = ''; // This variable will store the user's search input

  @Output() search = new EventEmitter<string>(); // EventEmitter to pass search query to parent component

  onSearch(): void {
    this.search.emit(this.searchText); // Emit the search query when the user clicks the search button
  }

  onClear(): void {
    this.searchText = ''; // Clear the search input
    this.search.emit(this.searchText); // Emit the empty query to reset the search results
  }
}
