import { Component, OnInit } from '@angular/core';
import { ReceptionistModel } from '../Model/receptionist.model';
import { ReceptionistService } from '../Service/receptionist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatereceptionist',
  templateUrl: './updatereceptionist.component.html',
  styleUrls: ['./updatereceptionist.component.css']
})
export class UpdateReceptionistComponent implements OnInit {
  receptionist: ReceptionistModel = new ReceptionistModel();

  constructor(
    private route: ActivatedRoute,
    private receptionistService: ReceptionistService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.receptionistService.getReceptionist(id).subscribe(data => {
        this.receptionist = data;
      });
    }
  }

  updateReceptionist(): void {
    this.receptionistService.updateReceptionist(this.receptionist).subscribe(() => {
      this.router.navigate(['/viewrecep']);
    });
  }
}
