import { Component, OnInit } from '@angular/core';
import { RecepappointmentService } from '../../Service/recepappointment.service';
import { RecepAppointment } from '../../Model/recepappointment.model';
import { Router } from '@angular/router';
import {DoctorModel} from "../../../AdminDashBoard/Doctors/Model/doctor.model";
import {DepartmentModel} from "../../../AdminDashBoard/Department/Model/department.model";
import {DoctorService} from "../../../AdminDashBoard/Doctors/service/doctor.service";
import {DepartmentService} from "../../../AdminDashBoard/Department/Service/department.service";
@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrl: './addappointment.component.css'
})
export class AddappointmentComponent implements OnInit {

  appointment: RecepAppointment = new RecepAppointment();
  doctors: DoctorModel[] = [];
  departments: DepartmentModel[] = [];
  selectedDoctorId?: string;
  selectedDepartmentId?: string;

  constructor(
    private appointmentService: RecepappointmentService,
    private doctorService: DoctorService,
    private departmentService: DepartmentService,
     private router: Router
    ) { }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe({
      next: res => {
        this.doctors = res;
      },
      error: error => {
        alert(error);
      }
    })
    this.departmentService.getDepartments().subscribe({
      next: res => {
        this.departments = res;
      },
      error: error => {
        alert(error);
      }
    })
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
        this.appointment.department = selectedDepartment;
      }

      // Add appointment
      this.appointmentService.addAppointment(this.appointment).subscribe(() => {
        this.router.navigate(['/viewappointment']);
      });
    } else {
      alert('Please select both doctor and department.');
    }
  }
}
