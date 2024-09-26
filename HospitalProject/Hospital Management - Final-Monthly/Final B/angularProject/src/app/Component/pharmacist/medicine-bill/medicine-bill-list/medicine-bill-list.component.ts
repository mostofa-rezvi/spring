import { Component, OnInit } from '@angular/core';
import { MedicineBillService } from '../medicine-bill.service';
import { ApiResponse } from '../../../../util/api.response.model';

@Component({
  selector: 'app-medicine-bill-list',
  templateUrl: './medicine-bill-list.component.html',
  styleUrls: ['./medicine-bill-list.component.css']
})
export class MedicineBillListComponent implements OnInit {
  bills: any[] = []; // Array to store the medicine bills
  apiError: string | undefined = ''; // To store any potential errors from the API

  constructor(private billService: MedicineBillService) {}

  ngOnInit() {
    this.fetchBills(); // Fetch bills on component initialization
  }

  fetchBills() {
    this.billService.getAllBills().subscribe({
      next: (response: ApiResponse) => {
        this.bills = response.data; // Assuming response.data contains the list of bills
      },
      error: (err) => {
        this.apiError = 'Error fetching bills';
        console.error('Error fetching bills:', err);
      }
    });
  }

  deleteBill(id: number) {
    if (confirm('Are you sure you want to delete this bill?')) {
      this.billService.deleteBill(id).subscribe({
        next: (response: ApiResponse) => {
          console.log('Bill deleted successfully', response);
          this.fetchBills(); // Refresh the bill list
        },
        error: (err) => {
          console.error('Error deleting bill:', err);
        }
      });
    }
  }
}
