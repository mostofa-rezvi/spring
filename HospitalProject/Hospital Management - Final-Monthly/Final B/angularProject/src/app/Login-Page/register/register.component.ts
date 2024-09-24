import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      cell: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      birthday: ['', Validators.required],
      address: ['', Validators.required],
      image: [''],
      role: ['', Validators.required],
      doctorDegree: [''],
      doctorSpeciality: [''],
      doctorLicense: [''],
      nurseDegree: [''],
      nurseSpeciality: [''],
      nurseLicense: ['']
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    }
  }
}
