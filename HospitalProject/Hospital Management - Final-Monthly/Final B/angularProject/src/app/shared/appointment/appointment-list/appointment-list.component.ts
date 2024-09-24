import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../service/appointment.service';
import { UserService } from '../../../user/user.service';
import { AuthService } from '../../../security/service/auth.service';
import { AppointmentModel } from '../model/appointment.model';
import { UserModel } from '../../../user/user.model';
import { ApiResponse } from '../../../util/api.response.model';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {

  appointments: AppointmentModel[] = [];
  doctors: UserModel[] = [];
  selectedDoctorId!: number;
  isLoading = true;

  constructor(
    private appointmentService: AppointmentService,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.fetchAppointments();
    this.fetchDoctors();
  }

  fetchAppointments(): void {
    this.appointmentService.getAllAppointments().subscribe({
      next: (response: ApiResponse) => {
        console.log(response)
        if (response.successful) {
          this.appointments = response.data['appointments'];
        } else {
          alert(response.message || 'Failed to load appointments');
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        alert('Error fetching appointments');
        this.isLoading = false;
      }
    });
  }

  fetchDoctors(): void {
    this.userService.findUsersByRole('DOCTOR').subscribe({
      next: (response: ApiResponse) => {
        console.log(response)
        if (response.successful) {
          this.doctors = response.data['users'];
        } else {
          alert(response.message || 'Failed to load doctors');
        }
      },
      error: (err: ApiResponse) => {
        console.error(err);
        alert('Error fetching doctors');
      }
    });
  }

  assignDoctor(appointment: AppointmentModel, doctorId: number): void {
    if (!doctorId) {
      alert('Please select a doctor');
      return;
    }
    appointment.doctor = this.doctors.find(doctor => doctor.id === doctorId) || null;

    this.appointmentService.updateAppointment(appointment).subscribe({
      next: (response: ApiResponse) => {
        if (response.successful) {
          alert('Doctor assigned successfully');
          this.fetchAppointments();
        } else {
          alert(response.message || 'Failed to assign doctor');
        }
      },
      error: (err) => {
        console.error(err);
        alert('Error assigning doctor');
      }
    });
  }
}
