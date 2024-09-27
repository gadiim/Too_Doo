// components/project-form/project-form.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core'; // декоратори для створення компонентів та передачі даних між ними.
import { FormsModule } from '@angular/forms'; // FormsModule для роботи з ngModel (двостороннім зв'язуванням).
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Project } from '../../models/project.model';
import { ProjectFormService } from '../../services/project-form.service';


@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, UpperCasePipe], // FormsModule для роботи з формами.
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})


export class ProjectFormComponent {
  @Input() project: Project = new Project(0, '', false);
  @Output() projectAdded = new EventEmitter<void>(); // Подія для інформування батьківського компонента, що проєкт додано.
  @Output() projectCanceled = new EventEmitter<void>(); // Подія для інформування про скасування дії.
  @Output() projectClosed = new EventEmitter<void>(); // Подія для інформування про закриття форми.


  constructor(
    private projectFormService: ProjectFormService,
  ) { }
  
  onProjectSave(): void {

    if (!this.project.title) {
      alert('Please select a title!');
      return;
    }

    if (!this.project.id) {
      this.projectFormService.saveProject(this.project);
    } else {
      this.projectFormService.updateProject(this.project);
    }
    this.projectAdded.emit(); 
    this.closeProjectForm();
  }

  closeProjectForm(): void {
    this.projectClosed.emit();
  }

  onProjectCancel(): void {
    this.projectCanceled.emit();
    this.closeProjectForm();
  }
}
