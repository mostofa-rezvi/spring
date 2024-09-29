import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report } from '../report/report.model';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private baseUrl = 'http://localhost:8080/api/reports';  // Update with your actual backend URL

  constructor(private http: HttpClient) { }

  getAllReports(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getReportById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/reports/${id}`);
  }

  createReport(report: Report): Observable<any> {
    return this.http.post(`${this.baseUrl}`, report);
  }

  updateReport(id: number, report: Report): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, report);
  }

  deleteReport(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getReportsByDiagnosticsId(diagnosticsId: number): Observable<Report[]> {
    return this.http.get<Report[]>(`${this.baseUrl}/diagnostics/${diagnosticsId}`);
  }

  getReportsByCreatedById(userId: number): Observable<Report[]> {
    return this.http.get<Report[]>(`${this.baseUrl}/createdBy/${userId}`);
  }
}
