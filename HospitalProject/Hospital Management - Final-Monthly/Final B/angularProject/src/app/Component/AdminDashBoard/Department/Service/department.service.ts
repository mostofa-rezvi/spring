import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentModel } from '../Model/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private apiUrl = 'http://localhost:3000/departments';

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<DepartmentModel[]> {
    return this.http.get<DepartmentModel[]>(this.apiUrl);
  }

  getDepartment(id: string): Observable<DepartmentModel> {
    return this.http.get<DepartmentModel>(`${this.apiUrl}/${id}`);
  }

  addDepartment(department: DepartmentModel): Observable<DepartmentModel> {
    return this.http.post<DepartmentModel>(this.apiUrl, department);
  }

  updateDepartment(department: DepartmentModel): Observable<DepartmentModel> {
    return this.http.put<DepartmentModel>(`${this.apiUrl}/${department.id}`, department);
  }

  deleteDepartment(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getDepartmentById(id: string): Observable<DepartmentModel> {
    return this.http.get<DepartmentModel>(`${this.apiUrl}/${id}`);
  }
}
