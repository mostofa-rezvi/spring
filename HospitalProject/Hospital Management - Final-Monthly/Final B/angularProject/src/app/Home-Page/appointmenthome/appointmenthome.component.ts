import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmenthomeService } from './appointmenthome.service';
import {RecepAppointment} from "../../Component/ReceptionistDashBoard/Model/recepappointment.model";

@Component({
  selector: 'app-appointmenthome',
  templateUrl: './appointmenthome.component.html',
  styleUrl: './appointmenthome.component.css'
})
export class AppointmenthomeComponent implements OnInit {
  departments: any[] = [];
  doctors: any[] = [];
  appointment: RecepAppointment = new RecepAppointment();
  selectedDoctorId?: string;
  selectedDepartmentId?: string;

  constructor(
    private appointmentService: AppointmenthomeService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.loadDepartments();
    this.loadDoctors();
  }

  loadDepartments(): void {
    this.appointmentService.getDepartments().subscribe(
      (data) => {
        this.departments = data;
      },
      (error) => {
        console.error('Error fetching departments', error);
      }
    );
  }

  loadDoctors(): void {
    this.appointmentService.getDoctors().subscribe(
      (data) => {
        this.doctors = data;
      },
      (error) => {
        console.error('Error fetching doctors', error);
      }
    );
  }

  onSubmit(): void {
    if (this.selectedDoctorId && this.selectedDepartmentId) {
      // Find doctor and department from the lists
      const selectedDoctor = this.doctors.find(doc => doc.id === this.selectedDoctorId);
      const selectedDepartment = this.departments.find(dep => dep.id === this.selectedDepartmentId);

      // Set the appointment's doctor and department
      if (selectedDoctor) {
        this.appointment.doctor = selectedDoctor;
      }
      if (selectedDepartment) {
        // this.appointment.department = selectedDepartment;
      }

      this.appointmentService.createAppointment(this.appointment)
        .subscribe({
          next: res => {
            this.router.navigate(['/lastappointment']);
          },
          error: error => {
            console.error('Error creating appointment:', error);
          }
        });
    } else {
      alert('Please select both doctor and department.');
    }
  }

}
