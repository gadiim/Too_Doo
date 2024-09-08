import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-local-storage',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: HttpClient,
      useFactory: () => provideHttpClient()
    }
  ],
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {}

  ngOnInit() {
    this.http.get('assets/data/todo-items.json').subscribe(response => {
      this.data = response;
      this.localStorageService.saveData('todoItems', this.data);
    });
  }

  saveData() {
    const blob = new Blob([JSON.stringify(this.data)], { type: 'application/json' });
    saveAs(blob, 'todo-items.json');
  }

  loadData() {
    this.data = this.localStorageService.getData('todoItems');
  }
}
