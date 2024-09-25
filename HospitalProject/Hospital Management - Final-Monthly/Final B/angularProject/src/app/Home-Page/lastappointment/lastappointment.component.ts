import { Component, OnInit } from '@angular/core';
import {RecepAppointment} from "../../Component/ReceptionistDashBoard/Model/recepappointment.model";
import {RecepappointmentService} from "../../Component/ReceptionistDashBoard/Service/recepappointment.service";

@Component({
  selector: 'app-lastappointment',
  templateUrl: './lastappointment.component.html',
  styleUrl: './lastappointment.component.css'
})
export class LastappointmentComponent implements OnInit {
  appointments: RecepAppointment[] = [];
  latestAppointment: RecepAppointment | null = null;
  recentAppointment: any;

  constructor(
    // private profileService: ProfileService,
    private recepAppointmentServeice: RecepappointmentService
  ) { }

  ngOnInit(): void {
    this.recepAppointmentServeice.getMostRecentAppointment().subscribe(appointment => {
      this.recepAppointmentServeice = appointment;
    });
    this.loadAppointments();
    this.loadMostRecentAppointment();
  }

  loadAppointments(): void {
    this.recepAppointmentServeice.getAppointments()
      .subscribe(
        (data: RecepAppointment[]) => {
          this.appointments = data;

          // Identify the specific appointment for "Emran"
          this.latestAppointment = this.appointments.find(appointment =>
            appointment.patientName &&
            // appointment.department.name &&
            appointment.doctor.firstname && appointment.doctor.lastname &&
            appointment.appointmentDate &&
            appointment.appointmentTime
          ) || null;
        });
  }

  loadMostRecentAppointment(): void {
    this.recepAppointmentServeice.getMostRecentAppointment().subscribe(appointment => {
      this.recentAppointment = appointment;
    });
  }

  onNewAppointmentCreated(newAppointment: any): void {
    this.recepAppointmentServeice.getMostRecentAppointment().subscribe(appointment => {
      this.recentAppointment = appointment;
    });
  }
}
