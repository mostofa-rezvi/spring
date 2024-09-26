import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from "../medicine.model";
import { MedicineService } from "../medicine.service";

@Component({
  selector: 'app-medicine-add',
  templateUrl: './medicine-add.component.html',
})
export class MedicineAddComponent {
  medicine: {
    medicineStrength: string;
    instructions: string;
    price: number;
    dosageForm: string;
    id: number;
    stock: number;
    medicineName: string;
    manufacturer: { name: string; id: number }
  } = {
    id: 0,
    medicineName: '',
    dosageForm: '',
    instructions: '',
    medicineStrength: '',
    price: 0,
    stock: 0,
    manufacturer: { id: 0, name: '' } // Set this later
  };

  constructor(private medicineService: MedicineService, private router: Router) {}

  onSubmit(): void {
    this.medicineService.addMedicine(this.medicine).subscribe({
      next: () => {
        alert('Medicine added successfully!');
        this.router.navigate(['/medicines']);
      },
      error: (error) => {
        console.error(error);
        alert('Failed to add medicine.');
      },
    });
  }
}
