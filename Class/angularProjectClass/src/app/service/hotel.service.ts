import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HotelModel } from '../model/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  baseUrl: string = 'http://localhost:9090/api/hotel/';

  constructor(
    private httpClient: HttpClient
  ) { }

  createHotel(hotel: HotelModel): Observable<any> {
    return this.httpClient.post(this.baseUrl + "/save", hotel);
  }

  deleteHotel(id: string): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/" + id);
  }

  updateHotel(id: string, hotel: HotelModel): Observable<any> {
    return this.httpClient.put(this.baseUrl + "/" + id, hotel);
  }

  getAllHotel(): Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  getByID(id: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/" + id);
  }

  private handleError(errror: any){
    console.error('An error occurred: ', errror);
    return throwError(() => new Error('test'));
  }


}
