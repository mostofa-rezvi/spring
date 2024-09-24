import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorProfileModel } from '../Model/doctorprofile.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorprofileService {
  private apiUrl = 'http://localhost:3000/doctorprofile';

  constructor(private http: HttpClient) { }

  getProfile(): Observable<DoctorProfileModel> {
    return this.http.get<DoctorProfileModel>(this.apiUrl);
  }

  updateProfile(profile: DoctorProfileModel): Observable<DoctorProfileModel> {
    return this.http.put<DoctorProfileModel>(this.apiUrl, profile);
  }
}