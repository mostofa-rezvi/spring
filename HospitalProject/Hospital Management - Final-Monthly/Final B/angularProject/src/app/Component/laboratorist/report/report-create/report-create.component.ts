import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { Report } from '../report.model';
import { UserModel } from '../../../../user/user.model';
import { Test } from '../../test/test.model';
import { UserService } from '../../../../user/user.service';
import { TestService } from '../../test/test.service';
import { ApiResponse } from '../../../../util/api.response.model';

@Component({
  selector: 'app-report-create',
  templateUrl: './report-create.component.html',
  styleUrls: ['./report-create.component.css']
})
export class ReportCreateComponent implements OnInit {
  users: UserModel[] = []; // Change type to UserModel
  tests: Test[] = [];
  selectedUser!: UserModel;
  selectedTest!: Test;
  reportName!: string;
  reportResult: string = '';
  reportResults: string[] = []; // Store report results

  constructor(
    private userService: UserService,
    private testService: TestService,
    private reportService: ReportService
  ) { }

  ngOnInit(): void {
    this.loadUsers();
    this.loadTests();
  }

  loadUsers(): void {
    this.userService.findAllUsers().subscribe(
      (response: ApiResponse) => {
        if (response.successful) {
          this.users = response.data;
        } else {
          console.error('Error fetching users:', response.message);
        }
      },
      error => {
        console.error('Error fetching users!', error);
      }
    );
  }

  loadTests(): void {
    this.testService.getAllTests().subscribe(
      (data: Test[]) => {
        this.tests = data;
      },
      error => {
        console.error('Error fetching tests!', error);
      }
    );
  }

  onTestSelect(): void {
    if (this.selectedTest) {
      this.reportName = 'Report - ' + this.selectedTest.testName;
      this.loadReportResults();
    }
  }

  loadReportResults(): void {
    this.reportResults = ['Result 1', 'Result 2'];
  }

  onUserSelect(): void {
    console.log('Selected user:', this.selectedUser);
    this.loadUsers();
  }


  createReport(): void {
    const report: Report = {
      id: 0,
      reportName: this.reportName,
      description: '',
      sampleId: '',
      reportResult: this.reportResult,
      interpretation: '',
      testDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      user: { id: this.selectedUser.id },
      test: { id: this.selectedTest.id }
    };

    this.reportService.createReport(report).subscribe(
      (newReport: Report) => {
        console.log('Report created successfully!', newReport);
      },
      error => {
        console.error('Error creating report!', error);
      }
    );
  }
}
