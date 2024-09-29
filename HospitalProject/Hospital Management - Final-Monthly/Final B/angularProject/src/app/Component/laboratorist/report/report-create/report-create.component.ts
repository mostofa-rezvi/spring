
import { Component } from '@angular/core';
import { ReportService } from '../../report/report.service';
import { Report } from '../../report/report.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-create',
  templateUrl: './report-create.component.html',
  styleUrls: ['./report-create.component.css'],
})
export class ReportCreateComponent {
  report: Report = new Report();

  constructor(
    private reportService: ReportService,
    private router: Router
  ) { }

  createReport(): void {
    this.reportService.createReport(this.report).subscribe(
      (response) => {
        console.log('Report created successfully', response);
        this.router.navigate(['/reports']);
      },
      (error) => {
        console.error('Error creating report', error);
      }
    );
  }
}
