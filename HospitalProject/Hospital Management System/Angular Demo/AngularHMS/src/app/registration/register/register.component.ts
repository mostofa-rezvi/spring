import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  // registerForm: FormGroup;

  // constructor(
  //   private authService: AuthService,
  //   private fb: FormBuilder, 
  //   private router: Router
  // ) {
  //   this.registerForm = this.fb.group({
  //     username: ['', Validators.required],
  //     emailaddress: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required],
  //     mobileNumber: [''],
  //     terms: [false, Validators.requiredTrue]
  //   });
  // }

  // onSubmit() {
  //   if (this.registerForm.valid) {
  //     const formValues = this.registerForm.value;
  //     console.log('Registration Form Values:', formValues);
  //     this.authService.registration(formValues)
  //       .subscribe({
  //         next: res => {
  //           console.log('User Registration Successfully Done.', res);
  //           this.authService.storeToken(res.token);
  //           this.router.navigate(['login']);
  //         },
  //         error: error => {
  //           console.log('Error Registration User' + error);
  //         }
  //       });
  //     this.router.navigate(['/login']);
  //   }
  //   else{
  //     alert("Complete Mandatory Field")
  //   }
  // }
}
