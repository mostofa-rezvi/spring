import { Component, OnInit } from '@angular/core';
import { NurseService } from '../Service/nurse.service';
import { NurseModel } from '../Model/nurse.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewnurse',
  templateUrl: './viewnurse.component.html',
  styleUrl: './viewnurse.component.css'
})
export class ViewnurseComponent implements OnInit{
  nurses: NurseModel[] = [];

  constructor(private nurseService: NurseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.nurseService.getNurses().subscribe(data => {
      this.nurses = data;
    });
  }

  updateNurse(id: string){
    this.router.navigate(['updatenurse/' + id]);
  }

  // deleteNurse(id: string){
  //   this.router.navigate(['deletenurse']);
  // }

  deleteNurse(id: string) {
    if (confirm('Are you sure you want to delete this nurse?')) {
      this.nurseService.deleteNurse(id).subscribe(() => {
        this.loadNurses();
      });
    }
  }

  loadNurses() {
    this.nurseService.getNurses().subscribe(
      data => {
        this.nurses = data;
      },
      error => {
        console.error('Error fetching nurses', error);
        // Handle errors here, maybe show a message to the user
      }
    );
  }
}
