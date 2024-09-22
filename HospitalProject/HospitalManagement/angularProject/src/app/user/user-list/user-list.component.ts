import { Component, OnInit } from '@angular/core';
import { UserModel } from "../user.model";
import { UserService } from "../user.service";
import { ApiResponse } from "../../util/api.response.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users: UserModel[] = [];

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.findAllUsers().subscribe({
      next: (response: ApiResponse) => {
        if (response && response.successful) {
          this.users = response.data['users'];
        } else {
          alert(response?.message || 'Not Successful');
        }
      },
      error: error => {
        alert(error.error?.message || `An error occurred`);
      }
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe({
      next: (response: ApiResponse) => {
        if (response && response.successful) {
          this.loadUsers();
          alert(response?.message || 'Successful');
        } else {
          alert(response?.message || 'Not Successful');
        }
      },
      error: error => {
        alert(error.error?.message || `An error occurred`);
      }
    });
  }

  editUser(id: number): void {
    this.router.navigate(['edit-user', id]);
  }
}
