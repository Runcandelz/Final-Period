import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './custom-form.component.html',
  styleUrl: './custom-form.component.css'
})
export class CustomFormComponent {
  submitted = false;

  jobForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
    position: new FormControl('', [Validators.required]),
    experience: new FormControl('', [Validators.required]),
    employmentType: new FormControl('', [Validators.required]),
    availability: new FormControl('', [Validators.required]),
    expectedSalary: new FormControl('', [Validators.required, Validators.min(1)]),
    coverLetter: new FormControl('', [Validators.required, Validators.minLength(30)]),
    agreeTerms: new FormControl(false, [Validators.requiredTrue]),
  });

  get f() { return this.jobForm.controls; }

  onSubmit() {
    if (this.jobForm.valid) {
      this.submitted = true;
    } else {
      this.jobForm.markAllAsTouched();
    }
  }

  onReset() {
    this.submitted = false;
    this.jobForm.reset();
  }
}
