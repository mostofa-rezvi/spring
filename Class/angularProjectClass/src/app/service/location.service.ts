import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl: string = 'http://localhost:9090/api/location';

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllLocation(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
