// components/local-storage/local-storage.component.ts

import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent {

  constructor(private localStorageService: LocalStorageService) {}

  addItemToLocalStorage(): void {
    this.localStorageService.setItem('myKey', {name: 'Example', value: 100});
  }

  getItemFromLocalStorage(): void {
    const data = this.localStorageService.getItem('myKey');
  }

  clearLocalStorage(): void {
    this.localStorageService.clear();
  }
}


