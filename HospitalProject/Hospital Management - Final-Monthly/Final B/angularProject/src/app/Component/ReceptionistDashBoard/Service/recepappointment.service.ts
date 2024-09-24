import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecepAppointment } from '../Model/recepappointment.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecepappointmentService {
  private apiUrl = 'http://localhost:3000/appointments'; // JSON Server URL

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<RecepAppointment[]> {
    return this.http.get<RecepAppointment[]>(this.apiUrl);
  }

  getAppointmentById(id: string): Observable<RecepAppointment> {
    return this.http.get<RecepAppointment>(`${this.apiUrl}/${id}`);
  }

  addAppointment(appointment: RecepAppointment): Observable<RecepAppointment> {
    return this.http.post<RecepAppointment>(this.apiUrl, appointment);
  }

  updateAppointment(id: string, appointment: RecepAppointment): Observable<RecepAppointment> {
    return this.http.put<RecepAppointment>(`${this.apiUrl}/${id}`, appointment);
  }

  deleteAppointment(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getMostRecentAppointment(): Observable<any> {
    return this.getAppointments().pipe(
      map(appointments => {
        if (appointments.length === 0) {
          return null;
        }
        return appointments.reduce((latest, appointment) => 
          new Date(appointment.appointmentDate + 'T' + appointment.appointmentTime) > 
          new Date(latest.appointmentDate + 'T' + latest.appointmentTime) ? appointment : latest
        );
      })
    );
  }
}
