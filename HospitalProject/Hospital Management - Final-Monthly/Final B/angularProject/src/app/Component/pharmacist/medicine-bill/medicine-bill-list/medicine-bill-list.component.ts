import {Component, OnInit} from '@angular/core';
import {MedicineBillService} from '../medicine-bill.service';
import {Router} from '@angular/router';
import {ApiResponse} from "../../../../util/api.response.model";

@Component({
  selector: 'app-medicine-bill-list',
  templateUrl: './medicine-bill-list.component.html',
  styleUrls: ['./medicine-bill-list.component.css']
})
export class MedicineBillListComponent implements OnInit {

  bills: Array<{
    id: number;
    name: string;
    phone: number;
    email: string;
    address: string;
    invoiceDate: Date;
    totalAmount: number;
    amountPaid: number;
    balance: number;
    status: string;
    description: string;
  }> = [];

  apiError: string | undefined = ''; // To handle errors from the API

  constructor(private billService: MedicineBillService, private router: Router) {
  }

  ngOnInit() {
    this.loadBills(); // Load the bills when the component initializes
  }

  // Load all the bills using the service
  loadBills() {
    this.billService.getAllBills().subscribe({
      next: (response: ApiResponse) => {
        if (response.data) {
          this.bills = response.data;
        } else {
          this.apiError = 'Failed to load bills';
          console.error('Error fetching bills:', response.message);
        }
      },
      error: (err) => {
        this.apiError = 'Error connecting to the server';
        console.error('Error fetching bills:', err);
      }
    });
  }

  // Function to print the bill details
  printBill(bill: any) {
    const printContent = `
      <h2>Medicine Bill</h2>
      <p><strong>Bill ID:</strong> ${bill.id}</p>
      <p><strong>Patient Name:</strong> ${bill.name}</p>
      <p><strong>Phone:</strong> ${bill.phone}</p>
      <p><strong>Email:</strong> ${bill.email}</p>
      <p><strong>Invoice Date:</strong> ${new Date(bill.invoiceDate).toLocaleDateString()}</p>
      <p><strong>Total Amount:</strong> ${bill.totalAmount}</p>
      <p><strong>Amount Paid:</strong> ${bill.amountPaid}</p>
      <p><strong>Balance:</strong> ${bill.balance}</p>
      <p><strong>Status:</strong> ${bill.status}</p>
      <p><strong>Description:</strong> ${bill.description}</p>
    `;
    const newWindow = window.open('', '_blank', 'width=600,height=800');
    if (newWindow) {
      newWindow.document.write(`
        <html>
        <head><title>Print Bill</title></head>
        <body>${printContent}</body>
        </html>
      `);
      newWindow.document.close();
      newWindow.print();
    }
  }
}
