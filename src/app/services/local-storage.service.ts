// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class LocalStorageService {

//   constructor() { }

//   public saveData(key: string, value: any): void {
//     localStorage.setItem(key, JSON.stringify(value));
//   }

//   public getData(key: string): any {
//     const data = localStorage.getItem(key);
//     return data ? JSON.parse(data) : null;
//   }

//   public removeData(key: string): void {
//     localStorage.removeItem(key);
//   }

//   public clearData(): void {
//     localStorage.clear();
//   }
// }

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public saveData(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getData(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  public removeData(key: string): void {
    localStorage.removeItem(key);
  }

  public clearData(): void {
    localStorage.clear();
  }
}