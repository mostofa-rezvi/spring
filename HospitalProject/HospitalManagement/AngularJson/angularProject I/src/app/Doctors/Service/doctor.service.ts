import { Injectable } from '@angular/core';
import { DoctorModel } from '../Model/doctor.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiUrl = 'http://localhost:3000/doctors';

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<DoctorModel[]> {
    return this.http.get<DoctorModel[]>(this.apiUrl);
  }

  getDoctor(id: string): Observable<DoctorModel> {
    return this.http.get<DoctorModel>(`${this.apiUrl}/${id}`);
  }

  addDoctor(doctor: DoctorModel): Observable<DoctorModel> {
    return this.http.post<DoctorModel>(this.apiUrl, doctor);
  }

  updateDoctor(doctor: DoctorModel): Observable<DoctorModel> {
    return this.http.put<DoctorModel>(`${this.apiUrl}/${doctor.id}`, doctor);
  }

  deleteDoctor(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
