// services/todo-filter.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoFilterService {

  private selectedPriority: string = '';
  private selectedTag: string = '';

  constructor() { }

  highlightPriority(todoPriority: string): void {
    this.selectedPriority = todoPriority;
  }

  highlightTag(todoTag: string): void {
    this.selectedTag = todoTag;
  }

  clearPriority(): void {
    this.selectedPriority = '';
  }

  clearTag(): void {
    this.selectedTag = '';
  }

  getSelectedFilters(): { priority: string, tag: string } {
    return {
      priority: this.selectedPriority,
      tag: this.selectedTag
    };
  }

}
