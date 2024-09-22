import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminProfileModel } from './profile.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:3000/adminprofile';

  constructor(private http: HttpClient) {}

  getProfile(): Observable<AdminProfileModel> {
    return this.http.get<AdminProfileModel>(this.apiUrl);
  }

  updateProfile(profile: AdminProfileModel): Observable<AdminProfileModel> {
    return this.http.put<AdminProfileModel>(this.apiUrl, profile);
  }
}
