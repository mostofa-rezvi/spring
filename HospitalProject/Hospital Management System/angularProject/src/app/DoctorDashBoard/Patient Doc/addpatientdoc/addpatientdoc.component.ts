import { Component } from '@angular/core';
import { PatientDocModel } from '../../Model/patientdoc.model';
import { PatientdocService } from '../../Service/patientdoc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpatientdoc',
  templateUrl: './addpatientdoc.component.html',
  styleUrl: './addpatientdoc.component.css'
})
export class AddpatientdocComponent {
  patient: PatientDocModel = new PatientDocModel();

  constructor(private patientService: PatientdocService, private router: Router) { }

  addPatient(): void {
    this.patientService.addPatient(this.patient).subscribe(() => this.router.navigate(['viewpatient']));
  }
}
