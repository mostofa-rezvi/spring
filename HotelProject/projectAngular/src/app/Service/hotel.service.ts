import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HotelModel } from '../Model/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  baseUrl: string = 'http://localhost:8080/api/hotel/';

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllHotel(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  getHotelById(hotelId: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + hotelId);
  }

  createHotel(hotelModel: HotelModel, image: File): Observable<HotelModel> {
    const formData = new FormData();

    formData.append('hotel', new Blob([JSON.stringify(hotelModel)], { type: 'application/json' }));
    formData.append('image', image);

    return this.httpClient.post<HotelModel>(this.baseUrl + "save", formData);
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('test'));
  }

  deleteHotel(id: string): Observable<any> {
    return this.httpClient.delete(this.baseUrl + "/" + id);
  }

  updateHotel(id: string, hotelModel: HotelModel): Observable<any> {
    return this.httpClient.put(this.baseUrl + "/" + id, hotelModel);
  }

  getById(id: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/" + id);
  }
}
