import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from "../medicine.model";
import { MedicineService } from "../medicine.service";

@Component({
  selector: 'app-medicine-update',
  templateUrl: './medicine-update.component.html',
})
export class MedicineUpdateComponent implements OnInit {
  medicine!: Medicine; // Changed to a single Medicine object

  constructor(private medicineService: MedicineService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.medicineService.getMedicineById(id).subscribe({
      next: (response) => {
        this.medicine = response.data['/medicines']; 
      },
      error: () => {
        alert('Failed to load medicine details');
      }
    });
  }

  onSubmit(): void {
    this.medicineService.updateMedicine(this.medicine.id, this.medicine).subscribe({
      next: () => {
        alert('Medicine updated successfully!');
        this.router.navigate(['/medicines']);
      },
      error: (error) => {
        console.error(error);
        alert('Failed to update medicine.');
      },
    });
  }
}
