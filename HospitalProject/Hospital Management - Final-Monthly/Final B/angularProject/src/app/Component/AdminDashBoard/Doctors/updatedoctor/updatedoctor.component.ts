import { Component, OnInit } from '@angular/core';
import { DoctorModel } from '../Model/doctor.model';
import { DoctorService } from '../service/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatedoctor',
  templateUrl: './updatedoctor.component.html',
  styleUrl: './updatedoctor.component.css'
})
export class UpdatedoctorComponent implements OnInit {
  doctor: DoctorModel = new DoctorModel();

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.doctorService.getDoctor(id).subscribe(data => {
        this.doctor = data;
      });
    }
  }

  updateDoctor(): void {
    this.doctorService.updateDoctor(this.doctor).subscribe(() => {
      this.router.navigate(['/viewdoctor']);
    });
  }

}
