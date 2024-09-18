// services/local-storage.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}

  // Збереження даних у LocalStorage
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Отримання даних з LocalStorage
  getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  // Видалення елемента з LocalStorage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Очищення всіх даних LocalStorage
  clear(): void {
    localStorage.clear();
  }
}
