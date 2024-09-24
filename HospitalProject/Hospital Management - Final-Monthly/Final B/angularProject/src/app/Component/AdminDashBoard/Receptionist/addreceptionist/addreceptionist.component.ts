import { Component } from '@angular/core';
import { ReceptionistService } from '../Service/receptionist.service';
import { ReceptionistModel } from '../Model/receptionist.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addreceptionist',
  templateUrl: './addreceptionist.component.html',
  styleUrls: ['./addreceptionist.component.css']
})
export class AddReceptionistComponent {
  receptionist: ReceptionistModel = new ReceptionistModel();

  constructor(private receptionistService: ReceptionistService, private router: Router) { }

  addReceptionist(): void {
    this.receptionistService.addReceptionist(this.receptionist).subscribe(() => {
      this.router.navigate(['/viewrecep']);
    });
  }
}
