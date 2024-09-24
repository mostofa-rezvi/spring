import { Component, OnInit } from '@angular/core';
import { DoctorProfileModel } from '../../Model/doctorprofile.model';
import { DoctorprofileService } from '../../Service/doctorprofile.service';

@Component({
  selector: 'app-myprofiledoc',
  templateUrl: './myprofiledoc.component.html',
  styleUrl: './myprofiledoc.component.css'
})
export class MyprofiledocComponent implements OnInit {
  profile!: DoctorProfileModel;

  constructor(private profileService: DoctorprofileService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.profileService.getProfile().subscribe((data: DoctorProfileModel) => {
      this.profile = data;
    });
  }
}