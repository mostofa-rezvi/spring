import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8080';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private httpClient: HttpClient
  ) { }

  login(email: string, password: string): Observable<AuthResponse>{
    return this.httpClient.post<AuthResponse>(`${this.baseUrl}/login`, {email, password}, {headers: this.headers}).pipe
    map((response: AuthResponse) => {
      if(response.token){
        localStorage.setItem('authToken', response.token);
      }
      return response;
    });
  }

}
