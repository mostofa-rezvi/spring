import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from '../Service/department.service';
import { DepartmentModel } from '../Model/department.model';

@Component({
  selector: 'app-updatedepartment',
  templateUrl: './updatedepartment.component.html',
  styleUrl: './updatedepartment.component.css'
})
export class UpdatedepartmentComponent implements OnInit {
  departmentModel: DepartmentModel = {
    id: '',
    name: '',
    headOfDepartment: '',
    location: '',
    phone: '',
    email: '',
    numberOfDoctors: '',
    numberOfNurses: ''
  };

  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id')!;
    // this.departmentService.getDepartment(id).subscribe(data => {
    //   this.departmentModel = data;
    // });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadDepartment(id);
      }
    });
  }

  loadDepartment(id: string): void {
    this.departmentService.getDepartmentById(id).subscribe(department => {
      this.departmentModel = department;
    });
  }

  updateDepartment(): void {
    this.departmentService.updateDepartment(this.departmentModel).subscribe(() => {
      this.router.navigate(['/viewdepartment']);
    });
  }
}