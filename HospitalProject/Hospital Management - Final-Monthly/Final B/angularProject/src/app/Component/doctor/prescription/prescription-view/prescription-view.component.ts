import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrescriptionService } from '../prescription.service';
import { Prescription } from '../prescription.model';
import { ApiResponse } from '../../../../util/api.response.model';
import { Role, UserModel } from '../../../../user/user.model';
import { Test } from '../../../laboratorist/test/test.model';
import { Medicine } from '../../../pharmacist/medicine/medicine.model';

@Component({
  selector: 'app-prescription-view',
  templateUrl: './prescription-view.component.html',
  styleUrls: ['./prescription-view.component.css']
})
export class PrescriptionViewComponent implements OnInit {
  prescription!: Prescription;
  user: UserModel = new UserModel();
  test: Test = new Test();
  medicine: Medicine = new Medicine();

  constructor(
    private route: ActivatedRoute,
    private prescriptionService: PrescriptionService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    // this.loadPrescription(id);

    this.prescriptionService.getById(id).subscribe({
      next: (response: ApiResponse) => {
        if (response.successful) {
          this.prescription = response.data.report;
          console.log('Report fetched:', this.prescription);
        } else {
          console.error(response.data);

        }
      },
      error: (error) => {
        console.error('Error fetching reports!', error);

      }
    });
  }

  // loadPrescription(id: number): void {
  //   this.prescriptionService.getPrescriptionById(id).subscribe({
  //     next: (prescription: Prescription) => {
  //       this.prescription = prescription;
  //     },
  //     error: (error) => {
  //       console.error('Error fetching prescription:', error);
  //     }
  //   });
  // }

  printPrescription(): void {
    // window.print();
    const printContents = document.getElementById('printable-report')!.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    setTimeout(() => {
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload();
    }, 500);
  }

  protected readonly Role = Role;
}
