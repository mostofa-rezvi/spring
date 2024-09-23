import { Injectable } from '@angular/core';
import { ReceptionistModel } from '../Model/receptionist.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {
  private apiUrl = 'http://localhost:3000/receptionists';

  constructor(private http: HttpClient) { }

  getReceptionists(): Observable<ReceptionistModel[]> {
    return this.http.get<ReceptionistModel[]>(this.apiUrl);
  }

  getReceptionist(id: string): Observable<ReceptionistModel> {
    return this.http.get<ReceptionistModel>(`${this.apiUrl}/${id}`);
  }

  addReceptionist(receptionist: ReceptionistModel): Observable<ReceptionistModel> {
    return this.http.post<ReceptionistModel>(this.apiUrl, receptionist);
  }

  updateReceptionist(receptionist: ReceptionistModel): Observable<ReceptionistModel> {
    return this.http.put<ReceptionistModel>(`${this.apiUrl}/${receptionist.id}`, receptionist);
  }

  deleteReceptionist(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
