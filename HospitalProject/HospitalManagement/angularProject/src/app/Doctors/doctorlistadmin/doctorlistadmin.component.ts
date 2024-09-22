import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../service/doctor.service';
import { DoctorModel } from '../Model/doctor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctorlistadmin',
  templateUrl: './doctorlistadmin.component.html',
  styleUrl: './doctorlistadmin.component.css'
})
export class DoctorlistadminComponent implements OnInit {
  doctors: DoctorModel[] = [];

  constructor(private doctorService: DoctorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe(data => {
      this.doctors = data;
    });
  }

  deleteDoctor(id: string): void {
    this.doctorService.deleteDoctor(id).subscribe(() => {
      this.doctors = this.doctors.filter(doctor => doctor.id !== id);
    });
  }

  updatedoctor(id: string){
    this.router.navigate(['updatedoctor/' + id]);
  }
}
