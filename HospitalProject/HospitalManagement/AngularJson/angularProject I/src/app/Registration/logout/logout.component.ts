import { Component } from '@angular/core';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(
    private authService: AuthService
  ) {
    this.authService.logout();
  }
}
