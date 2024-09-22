import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbarhome',
  templateUrl: './navbarhome.component.html',
  styleUrl: './navbarhome.component.css'
})
export class NavbarhomeComponent {
  constructor(
    private router: Router
  ){}

  navigateToAppointment(event: Event){
    event.preventDefault();
    this.router.navigate(["/appointment"]);
  }
}
