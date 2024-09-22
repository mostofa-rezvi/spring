import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NurseService } from '../Service/nurse.service';

@Component({
  selector: 'app-deletenurse',
  templateUrl: './deletenurse.component.html',
  styleUrl: './deletenurse.component.css'
})
export class DeletenurseComponent {
  id: string | null = null;

  constructor(
    private nurseService: NurseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  deleteNurse() {
    if (this.id) {
      this.nurseService.deleteNurse(this.id).subscribe(() => {
        this.router.navigate(['/viewnurse']);
      });
    }
  }
}
