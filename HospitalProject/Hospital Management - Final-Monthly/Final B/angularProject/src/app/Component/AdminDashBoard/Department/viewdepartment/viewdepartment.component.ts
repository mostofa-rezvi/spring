import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from '../Model/department.model';
import { DepartmentService } from '../Service/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewdepartment',
  templateUrl: './viewdepartment.component.html',
  styleUrl: './viewdepartment.component.css'
})
export class ViewdepartmentComponent implements OnInit {
  departments: DepartmentModel[] = [];

  constructor(private departmentService: DepartmentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(data => {
      this.departments = data;
    });
  }

  deleteDepartment(id: string): void {
    this.departmentService.deleteDepartment(id).subscribe(() => {
      this.departments = this.departments.filter(department => department.id !== id);
    });
  }

  updatedepartment(id: string){
    this.router.navigate([`/updatedepartment/${id}`]);
  }
}