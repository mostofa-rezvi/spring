import { Component, OnInit } from '@angular/core';
import { PatientDocModel } from '../../Model/patientdoc.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientdocService } from '../../Service/patientdoc.service';

@Component({
  selector: 'app-updatepatientdoc',
  templateUrl: './updatepatientdoc.component.html',
  styleUrl: './updatepatientdoc.component.css'
})
export class UpdatepatientdocComponent implements OnInit {
  patient: PatientDocModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientdocService
  ) { }

  ngOnInit(): void {
    this.getPatient();
  }

  getPatient(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.patientService.getPatient(id).subscribe(patient => this.patient = patient);
    } else {
      alert('Could not find id')
    }
  }

  updatePatient(): void {
    if (this.patient) {
      this.patientService.updatePatient(this.patient).subscribe(() => this.router.navigate(['viewpatient']));
    }
  }
}