import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSelectionComponent } from './todo-selection.component';

describe('TodoSelectionComponent', () => {
  let component: TodoSelectionComponent;
  let fixture: ComponentFixture<TodoSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
