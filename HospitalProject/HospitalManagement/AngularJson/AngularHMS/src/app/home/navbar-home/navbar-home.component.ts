import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrl: './navbar-home.component.css'
})
export class NavbarHomeComponent {

  constructor(
    private router: Router,
    // private authService: AuthService
  ){}

  navigateToAppointment(event: Event){
    event.preventDefault();
    this.router.navigate(["/appointment"]);
  }

  logout() {
    // this.authService.logout();
    this.router.navigate(['/login']);
  }
}
