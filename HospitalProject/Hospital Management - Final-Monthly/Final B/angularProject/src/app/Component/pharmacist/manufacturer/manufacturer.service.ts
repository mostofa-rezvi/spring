import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manufacturer } from './manufacturer.model';
import {ApiResponse} from "../../../util/api.response.model";

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  private apiUrl = 'http://localhost:8080/api/manufacturers'; // Adjust URL based on your backend

  constructor(private http: HttpClient) {}

  // Get all manufacturers
  getManufacturers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }

  // Get manufacturer by ID
  getManufacturerById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`);
  }

  // Create a new manufacturer
  createManufacturer(manufacturer: Manufacturer): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.apiUrl, manufacturer);
  }

  // Update an existing manufacturer
  updateManufacturer(id: number, manufacturer: Manufacturer): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/${id}`, manufacturer);
  }

  // Delete a manufacturer
  deleteManufacturer(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`);
  }
}
