import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  // forgetPasswordForm: FormGroup;

  // constructor(private fb: FormBuilder, private router: Router) {
  //   this.forgetPasswordForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]]
  //   });
  // }

  // onSubmit() {
  //   if (this.forgetPasswordForm.valid) {
  //     const { email } = this.forgetPasswordForm.value;
  //     console.log('Email for password reset:', email);
      
  //     this.router.navigate(['/login']);
  //   }
  // }
}
