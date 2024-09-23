import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrl: './profile-update.component.css'
})
export class ProfileUpdateComponent {

  // profile!: AdminProfileModel;

  // constructor(private profileService: ProfileService, private router: Router) {}

  // ngOnInit(): void {
  //   this.getProfile();
  // }

  // getProfile(): void {
  //   this.profileService.getProfile().subscribe((data: AdminProfileModel) => {
  //     this.profile = data;
  //   });
  // }

  // updateProfile(): void {
  //   this.profileService.updateProfile(this.profile).subscribe(() => {
  //     this.router.navigate(['adminprofile']);
  //   });
  // }
}
