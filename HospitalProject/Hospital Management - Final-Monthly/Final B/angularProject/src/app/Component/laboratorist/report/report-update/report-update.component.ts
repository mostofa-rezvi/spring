import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from '../../report/report.service';
import { Report } from '../../report/report.model';

@Component({
  selector: 'app-report-update',
  templateUrl: './report-update.component.html',
  styleUrls: ['./report-update.component.css'],
})
export class ReportUpdateComponent implements OnInit {
  report: Report = new Report();
  id!: number;
  errorMessage: string = '';

  constructor(
    private reportService: ReportService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getReportDetails(this.id);
  }

  getReportDetails(id: number): void {
    this.reportService.getReportById(id).subscribe(
      (response) => {
        this.report = response.data.report;
      },
      (error) => {
        console.error('Error fetching report details', error);
        this.errorMessage = 'Could not load report details.';
      }
    );
  }

  updateReport(): void {
    this.reportService.updateReport(this.id, this.report).subscribe(
      (response) => {
        console.log('Report updated successfully', response);
        this.router.navigate(['/reports']); // Redirect to report list after update
      },
      (error) => {
        console.error('Error updating report', error);
        this.errorMessage = 'Error updating report.';
      }
    );
  }
}
