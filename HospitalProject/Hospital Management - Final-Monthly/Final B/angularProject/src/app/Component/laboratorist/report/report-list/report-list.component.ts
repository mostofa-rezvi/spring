import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../report/report.service';
import { Report } from '../../report/report.model';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css'],
})
export class ReportListComponent implements OnInit {
  reports: Report[] = [];
  loading: boolean = true;
  errorMessage: string = '';

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.getAllReports();
  }

  getAllReports(): void {
    this.reportService.getAllReports().subscribe(
      (response) => {
        this.reports = response.data.reports;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching reports', error);
        this.errorMessage = 'Could not fetch reports.';
        this.loading = false;
      }
    );
  }

  deleteReport(id: number): void {
    if (confirm('Are you sure you want to delete this report?')) {
      this.reportService.deleteReport(id).subscribe(
        (response) => {
          console.log('Report deleted successfully', response);
          this.reports = this.reports.filter((report) => report.id !== id);
        },
        (error) => {
          console.error('Error deleting report', error);
        }
      );
    }
  }
}
