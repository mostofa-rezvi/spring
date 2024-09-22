import { Component, OnInit } from '@angular/core';
import { DoctorModel } from '../Model/doctor.model';
import { DoctorService } from '../Service/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewdoctor',
  templateUrl: './viewdoctor.component.html',
  styleUrl: './viewdoctor.component.css'
})
export class ViewdoctorComponent implements OnInit {
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
