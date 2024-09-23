import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // loginForm: FormGroup;
  // errorMessage: string | null = null;

  // constructor(
  //   private fb: FormBuilder, 
  //   private router: Router, 
  //   private authService: AuthService
  // ) {
  //   this.loginForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required]
  //   });
  // }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     const { email, password } = this.loginForm.value;
  //     const loginModel = { email: email, password: password };
  //     this.authService.login(loginModel)
  //       .subscribe({
  //         next: res => {
  //           console.log('success', res);
  //           this.router.navigate(['/welcome']);
  //         },
  //         error: error => {
  //           this.errorMessage = 'Invalid login credentials';
  //         }
  //       });
  //   } else {
  //     this.errorMessage = 'Please fill in all required fields correctly';
  //   }
  // }
}
