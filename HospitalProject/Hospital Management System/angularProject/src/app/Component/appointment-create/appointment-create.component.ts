import { Component, OnInit } from '@angular/core';
import { AppointmentModel } from '../model/appointment.model';
import { AppointmentService } from '../service/appointment.service';

@Component({
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.css']
})
export class AppointmentCreateComponent implements OnInit {
  appointmentModel: AppointmentModel = new AppointmentModel();

  appointment = {
    name: '',
    email: '',
    phone: '',
    age: null,
    gender: '',
    birthday: '',
    date: '',
    time: '',
    notes: ''
  };

  availableDates: Date[] = [];
  availableTimes: string[] = [];
  selectedDate: Date | null = null; // Track selected date
  
  constructor(private appointmentService: AppointmentService) {
    this.generateAvailableDates();
  }

  ngOnInit(): void { }

  generateAvailableDates() {
    const today = new Date();
    for (let i = 0; i < 10; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      this.availableDates.push(date);
    }
  }

  onDateSelect(selectedDate: Date) {
    this.selectedDate = selectedDate; // Set the selected date
    this.appointment.date = selectedDate.toLocaleDateString(); // Store selected date
    this.generateAvailableTimes(selectedDate);
  }

  generateAvailableTimes(selectedDate: Date) {
    this.availableTimes = [];
    const startTime = new Date(selectedDate);
    startTime.setHours(15); // 3 PM
    const endTime = new Date(selectedDate);
    endTime.setHours(22); // 10 PM

    for (let hour = startTime.getHours(); hour <= endTime.getHours(); hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const time = new Date(selectedDate);
        time.setHours(hour, minute, 0);
        this.availableTimes.push(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      }
    }
  }

  createAppointment(): void {
    this.appointmentService.createAppointment(this.appointmentModel)
      .subscribe({
        next: (res: any) => {
          console.log('Appointment created successfully:', res);
          alert('Appointment successfully created!');
        },
        error: (error: any) => {
          console.error('Error creating appointment:', error);
          alert('Error creating appointment.');
        }
      });
  }
}
