import { Component, OnInit } from '@angular/core';
import { NurseModel } from '../Model/nurse.model';
import { NurseService } from '../Service/nurse.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatenurse',
  templateUrl: './updatenurse.component.html',
  styleUrl: './updatenurse.component.css'
})
export class UpdatenurseComponent implements OnInit{
  nurse: NurseModel = new NurseModel();

  constructor(
    private nurseService: NurseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.nurseService.getNurse(id).subscribe(data => {
        this.nurse = data;
      });
    }
  }

  updateNurse() {
    this.nurseService.updateNurse(this.nurse).subscribe(() => {
      this.router.navigate(['/viewnurse']);
    });
  }
}
