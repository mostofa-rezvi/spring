import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../report.service';
import { Report } from '../report.model';
import {Role, UserModel} from '../../../../user/user.model';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {
  report: Report = new Report();
  user: UserModel = new UserModel();

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService
  ) {}

  ngOnInit(): void {
    const reportId = this.route.snapshot.paramMap.get('id');
    if (reportId) {
      this.reportService.getReportById(+reportId).subscribe(
        (data: Report) => {
          console.log('Report data:', data);
          this.report = { ...data };
        },
        error => {
          console.error('Error fetching report!', error);
        }
      );
    }
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
