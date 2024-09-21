import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../service/hotel.service';
import { LocationService } from '../../../service/location.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-hotel-view',
  templateUrl: './hotel-view.component.html',
  styleUrl: './hotel-view.component.css'
})
export class HotelViewComponent implements OnInit{

  locations: any;
  hotels: any;

  constructor(
    private hotelService: HotelService,
    private locationService: LocationService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.loadLocations();
  }

  loadLocations(){
    this.locations = this.locationService.getAllLocation();
    this.hotels = this.hotelService.getAllHotel().subscribe({
      next: res => {
        this.hotels = res;
      },
      error: error => {
        console.log(error);
      }
    });
  }

}
