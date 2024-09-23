import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientdocService } from '../../Service/patientdoc.service';
import { PatientDocModel } from '../../Model/patientdoc.model';

@Component({
  selector: 'app-listofpatient',
  templateUrl: './listofpatient.component.html',
  styleUrl: './listofpatient.component.css'
})
export class ListofpatientComponent implements OnInit {
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

  goBack(): void {
    this.router.navigate(['viewpatient']);
  }
}