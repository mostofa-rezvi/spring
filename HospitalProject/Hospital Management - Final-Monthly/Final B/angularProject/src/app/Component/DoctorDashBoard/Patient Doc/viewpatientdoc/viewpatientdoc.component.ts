import { Component, OnInit } from '@angular/core';
import { PatientDocModel } from '../../Model/patientdoc.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientdocService } from '../../Service/patientdoc.service';

@Component({
  selector: 'app-viewpatientdoc',
  templateUrl: './viewpatientdoc.component.html',
  styleUrl: './viewpatientdoc.component.css'
})
export class ViewpatientdocComponent implements OnInit {
  patients: PatientDocModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientdocService
  ) {}

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getPatients().subscribe({
      next: res => {
        this.patients = res;
      },
      error: error=>{
        alert('Could not fetch patients')
      }
    });
  }

}