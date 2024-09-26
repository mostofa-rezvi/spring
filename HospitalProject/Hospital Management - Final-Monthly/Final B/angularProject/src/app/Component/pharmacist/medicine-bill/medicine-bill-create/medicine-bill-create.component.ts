import {Component} from '@angular/core';
import {MedicineBillService} from '../medicine-bill.service';
import {Router} from '@angular/router';
import {ApiResponse} from "../../../../util/api.response.model";

@Component({
  selector: 'app-medicine-bill-create',
  templateUrl: './medicine-bill-create.component.html',
  styleUrls: ['./medicine-bill-create.component.css']
})
export class MedicineBillCreateComponent {

  bill: {
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
  } = {
    id: 0,
    name: '',
    phone: 0,
    email: '',
    address: '',
    invoiceDate: new Date(),
    totalAmount: 0,
    amountPaid: 0,
    balance: 0,
    status: '',
    description: ''
  };

  medicines: Array<{
    id: number;
    medicineName: string;
    dosageForm: string;
    medicineStrength: string;
    price: number
  }> = [];

  totalAmount: number = 0;
  apiError: string | undefined = ''; // To store any potential errors from the API

  constructor(private billService: MedicineBillService, private router: Router) {
  }

  ngOnInit() {
  }

  // Method to add a new medicine entry to the medicine list
  addMedicine() {
    this.medicines.push({
      id: 0,
      medicineName: '',
      dosageForm: '',
      medicineStrength: '',
      price: 0
    });
  }

  // Method to remove a specific medicine entry by index
  removeMedicine(index: number) {
    this.medicines.splice(index, 1);
    this.calculateTotal();
  }

  // Calculate total amount by summing up all medicine prices
  calculateTotal() {
    this.totalAmount = this.medicines.reduce((sum, medicine) => sum + Number(medicine.price), 0);
    this.bill.totalAmount = this.totalAmount;
  }

  // Calculate balance after amount paid
  calculateBalance() {
    return this.bill.totalAmount - this.bill.amountPaid;
  }

  // Handle form submission to create a bill with medicine list
  onSubmit() {
    const billData = {
      ...this.bill,
      medicineList: this.medicines
    };

    this.billService.createBill({
      ...this.bill,
      medicineList: this.medicines.map(medicine => ({
        id: medicine.id,
        medicineName: medicine.medicineName,
        dosageForm: medicine.dosageForm,
        medicineStrength: medicine.medicineStrength,
        price: medicine.price.toString() // Convert price to string
      }))
    }).subscribe({
        next: (response: ApiResponse) => {
          if (response.message) {
            console.log('Bill created successfully', response);
            this.router.navigate(['/bills']); // Navigate to the bills list page after success
          } else {
            // Handle API error response
            this.apiError = response.message;
            console.error('Error creating bill:', response.message);
          }
        },
        error:
          (err) => {
            // Handle request error
            this.apiError = 'Error connecting to the server';
            console.error('Error creating bill:', err);
          }
      }
    )
    ;
  }
}
