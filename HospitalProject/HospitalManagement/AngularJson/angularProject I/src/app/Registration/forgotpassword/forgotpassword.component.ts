import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {
  forgetPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.forgetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.forgetPasswordForm.valid) {
      const { email } = this.forgetPasswordForm.value;
      console.log('Email for password reset:', email);
      
      this.router.navigate(['/login']);
    }
  }
}
