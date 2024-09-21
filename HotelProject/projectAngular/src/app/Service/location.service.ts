import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl: string = "http://localhost:8080/api/location/";

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllLocations(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
