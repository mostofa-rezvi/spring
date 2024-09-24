import { Component, OnInit } from '@angular/core';
import { RecepAppointment } from '../../Model/recepappointment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecepappointmentService } from '../../Service/recepappointment.service';

@Component({
  selector: 'app-updateappointment',
  templateUrl: './updateappointment.component.html',
  styleUrl: './updateappointment.component.css'
})
export class UpdateappointmentComponent implements OnInit {
  appointment: RecepAppointment = new RecepAppointment();

  constructor(
    private route: ActivatedRoute,
    private appointmentService: RecepappointmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.appointmentService.getAppointmentById(id).subscribe((data) => {
        this.appointment = data;
      });
    }
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.appointmentService.updateAppointment(id, this.appointment).subscribe(() => {
        this.router.navigate(['/viewappointment']);
      });
    }
  }
}