import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentModel } from '../model/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:8080/api/appointments/save'; 

  constructor(private httpClient: HttpClient) { }

  createAppointment(appointment: AppointmentModel): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}`, appointment);
  }
}
