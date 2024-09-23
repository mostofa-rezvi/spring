import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientDocModel } from '../Model/patientdoc.model';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientdocService {
  private apiUrl = 'http://localhost:3000/patients'; // Your API URL

  constructor(private http: HttpClient) { }

  getPatients(): Observable<PatientDocModel[]> {


    return this.http.get<PatientDocModel[]>(this.apiUrl).pipe(
      tap(() => console.log('Fetched patients')),
      catchError(this.handleError<PatientDocModel[]>('getPatients', []))
    );
  }

  getPatient(id: string): Observable<PatientDocModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<PatientDocModel>(url).pipe(
      tap(() => console.log(`Fetched patient id=${id}`)),
      catchError(this.handleError<PatientDocModel>(`getPatient id=${id}`))
    );
  }

  addPatient(patient: PatientDocModel): Observable<PatientDocModel> {
    return this.http.post<PatientDocModel>(this.apiUrl, patient).pipe(
      tap((newPatient: PatientDocModel) => console.log(`Added patient w/ id=${newPatient.id}`)),
      catchError(this.handleError<PatientDocModel>('addPatient'))
    );
  }

  updatePatient(patient: PatientDocModel): Observable<any> {
    return this.http.put(this.apiUrl + '/' + patient.id, patient).pipe(
      tap(() => console.log(`Updated patient id=${patient.id}`)),
      catchError(this.handleError<any>('updatePatient'))
    );
  }

  deletePatient(id: number): Observable<PatientDocModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<PatientDocModel>(url).pipe(
      tap(() => console.log(`Deleted patient id=${id}`)),
      catchError(this.handleError<PatientDocModel>('deletePatient'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
