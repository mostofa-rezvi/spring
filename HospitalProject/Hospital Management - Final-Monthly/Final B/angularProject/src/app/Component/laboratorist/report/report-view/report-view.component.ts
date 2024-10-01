import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../report.service';
import { Report } from '../report.model';
import { Role, UserModel } from '../../../../user/user.model';
import { ApiResponse } from '../../../../util/api.response.model';
import { Test } from '../../test/test.model';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {
  report: Report = new Report();
  user: UserModel = new UserModel();
  test: Test = new Test();

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService
  ) { }

  // ngOnInit(): void {
  //   this.loadReport();
  // }


  // loadReport(): void {
  //   const reportId = this.route.snapshot.paramMap.get('id');
  //   if (reportId) {
  //     this.reportService.getReports().subscribe(
  //       (response: ApiResponse) => {
  //         if (response.data && response.data['report']) {
  //           this.report = response.data['report'];
  //           this.user = response.data['user'];
  //           this.test = response.data['test'];
  //         } else {
  //           console.error('Report data not found in the response');
  //         }
  //       },
  //       (error) => {
  //         console.error('Error fetching report:', error);
  //       }
  //     );
  //   } else {
  //     console.error('Report ID not found in the route!');
  //   }
  // }

  // ngOnInit(): void {
  //   const reportId = this.route.snapshot.paramMap.get('id');
  //   if (reportId) {
  //     this.reportService.getReportById(+reportId).subscribe(
  //       (data: Report) => {
  //         console.log('Report data:', data);
  //         this.report = { ...data };
  //       },
  //       error => {
  //         console.error('Error fetching report!', error);
  //       }
  //     );
  //   }
  // }

  ngOnInit(): void {
    // const reportId = this.route.snapshot.paramMap.get('id');
    this.reportService.getReports().subscribe(
      (response: ApiResponse) => {
        if (response.successful) {
          this.report = response.data['reports'];
        } else {
          console.error(response.data);
        }
      },
      error => {
        console.error('Error fetching reports!', error);
      }
    );    
  }


  // printReport() {
  //   window.print();
  // }

  printReport() {
    const printContents = document.getElementById('printable-report')!.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();

    document.body.innerHTML = originalContents;
    window.location.reload();
  }

  protected readonly Role = Role;
}
