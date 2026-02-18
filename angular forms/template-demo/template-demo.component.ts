import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-demo.component.html',
  styleUrl: './template-demo.component.css'
})
export class TemplateDemoComponent {
  title = '';
  emailVal = '';
  passwordVal = '';
  roleVal = '';
  genderVal = '';
  statusVal = '';
  commentsVal = '';
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}
