import { Component, OnInit } from '@angular/core';
import { ReceptionistModel } from '../Model/receptionist.model';
import { Router } from '@angular/router';
import { ReceptionistService } from '../Service/receptionist.service';

@Component({
  selector: 'app-receptionistlistadmin',
  templateUrl: './receptionistlistadmin.component.html',
  styleUrl: './receptionistlistadmin.component.css'
})
export class ReceptionistlistadminComponent implements OnInit {
  receptionists: ReceptionistModel[] = [];

  constructor(private receptionistService: ReceptionistService, private router: Router) { }

  ngOnInit(): void {
    this.receptionistService.getReceptionists().subscribe(data => {
      this.receptionists = data;
    });
  }

  deleteReceptionist(id: string): void {
    this.receptionistService.deleteReceptionist(id).subscribe(() => {
      this.receptionists = this.receptionists.filter(receptionist => receptionist.id !== id);
    });
  }

  updateReceptionist(id: string): void {
    this.router.navigate(['/updaterecep', id]);
  }
}
