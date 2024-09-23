import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NurseModel } from '../Model/nurse.model';

@Injectable({
  providedIn: 'root'
})
export class NurseService {
  private apiUrl = 'http://localhost:3000/nurses';

  constructor(private http: HttpClient) { }

  getNurses(): Observable<NurseModel[]> {
    return this.http.get<NurseModel[]>(this.apiUrl);
  }

  getNurse(id: string): Observable<NurseModel> {
    return this.http.get<NurseModel>(`${this.apiUrl}/${id}`);
  }

  addNurse(nurse: NurseModel): Observable<NurseModel> {
    return this.http.post<NurseModel>(this.apiUrl, nurse);
  }

  updateNurse(nurse: NurseModel): Observable<NurseModel> {
    return this.http.put<NurseModel>(`${this.apiUrl}/${nurse.id}`, nurse);
  }

  deleteNurse(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
