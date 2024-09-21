import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../Service/hotel.service';
import { LocationService } from '../../../Service/location.service';
import { Router } from '@angular/router';
import { RoomService } from '../../../Service/room.service';

@Component({
  selector: 'app-hotel-view',
  templateUrl: './hotel-view.component.html',
  styleUrl: './hotel-view.component.css'
})
export class HotelViewComponent implements OnInit {

  locations: any;
  hotels: any;
  rooms: any;

  constructor(
    private hotelService: HotelService,
    private locationService: LocationService,
    private roomService: RoomService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadLocations();
  }

  loadLocations() {
    this.locations = this.locationService.getAllLocations();
    this.hotelService.getAllHotel().subscribe({

      next: res => {
        this.hotels = res;
      },
      error: err => {
        console.log(err)
      }
    });
  }

  viewRooms(hotelId: string): void {
    this.router.navigate(['/room', hotelId]);
  }

}
