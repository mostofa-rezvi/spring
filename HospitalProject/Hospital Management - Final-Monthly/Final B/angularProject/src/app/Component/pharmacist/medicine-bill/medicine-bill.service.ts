import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicineBill } from './medicine-bill.model';
import {ApiResponse} from "../../../util/api.response.model";

@Injectable({
  providedIn: 'root'
})
export class MedicineBillService {
  private apiUrl = 'http://localhost:8080/api/bills'; // Adjust URL to match your Spring Boot API

  constructor(private http: HttpClient) { }

  getAllBills(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/`);
  }

  getBillById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/${id}`);
  }

  createBill(bill: {
    totalAmount: number;
    medicineList: { medicineStrength: string; price: string; dosageForm: string; id: number; medicineName: string }[];
    address: string;
    amountPaid: number;
    balance: number;
    phone: number;
    name: string;
    description: string;
    id: number;
    invoiceDate: Date;
    email: string;
    status: string
  })  : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}`, bill);
  }

  updateBill(id: number, bill: MedicineBill): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.apiUrl}/${id}`, bill);
  }

  deleteBill(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}/${id}`);
  }
}
