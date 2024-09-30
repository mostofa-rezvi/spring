import { Component, OnInit } from '@angular/core';
import { ReportService } from '../report.service';
import { Report } from '../report.model';
import { ApiResponse } from '../../../../util/api.response.model';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {
  reports: Report[] = [];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports(): void {
    this.reportService.getReports().subscribe(
      (response: ApiResponse) => {
        if (response.successful) {
          this.reports = response.data['reports'];
        } else {
          console.error(response.data);
        }
      },
      error => {
        console.error('Error fetching reports!', error);
      }
    );
  }

  deleteReport(id: number): void {
    if (confirm('Are you sure you want to delete this report?')) {
      this.reportService.deleteReport(id).subscribe(
        () => {
          this.reports = this.reports.filter(report => report.id !== id);
          console.log('Report deleted successfully!');
        },
        error => {
          console.error('Error deleting report!', error);
        }
      );
    }
  }
}
