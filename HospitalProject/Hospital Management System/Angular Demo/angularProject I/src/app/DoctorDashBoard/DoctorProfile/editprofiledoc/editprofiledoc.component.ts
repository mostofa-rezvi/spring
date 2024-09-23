import { Component, OnInit } from '@angular/core';
import { DoctorProfileModel } from '../../Model/doctorprofile.model';
import { Router } from '@angular/router';
import { DoctorprofileService } from '../../Service/doctorprofile.service';

@Component({
  selector: 'app-editprofiledoc',
  templateUrl: './editprofiledoc.component.html',
  styleUrl: './editprofiledoc.component.css'
})
export class EditprofiledocComponent implements OnInit {
  profile!: DoctorProfileModel;

  constructor(private profileService: DoctorprofileService, private router: Router) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.profileService.getProfile().subscribe((data: DoctorProfileModel) => {
      this.profile = data;
    });
  }

  updateProfile(): void {
    this.profileService.updateProfile(this.profile).subscribe(() => {
      this.router.navigate(['doctorprofile']);
    });
  }
}
