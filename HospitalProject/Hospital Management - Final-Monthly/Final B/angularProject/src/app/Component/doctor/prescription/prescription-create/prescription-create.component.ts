import { Component, OnInit } from '@angular/core';
import { Prescription } from '../prescription.model';
import { PrescriptionService } from '../prescription.service';
import { UserModel } from '../../../../user/user.model';
import { Medicine } from '../../../pharmacist/medicine/medicine.model';
import { Test } from '../../../laboratorist/test/test.model';
import { UserService } from '../../../../user/user.service';
import { MedicineService } from '../../../pharmacist/medicine/medicine.service';
import { TestService } from '../../../laboratorist/test/test.service';
import { ApiResponse } from '../../../../util/api.response.model';

@Component({
  selector: 'app-prescription-create',
  templateUrl: './prescription-create.component.html',
  styleUrls: ['./prescription-create.component.css']
})
export class PrescriptionCreateComponent implements OnInit {

  patients: UserModel[] = [];
  prescription: Prescription = new Prescription();
  medicines: Medicine[] = [];
  tests: Test[] = [];

  selectedMedicines: Medicine[] = [];
  selectedTests: Test[] = [];
  selectedPatientId!: number;

  constructor(
    private prescriptionService: PrescriptionService,
    private userService: UserService,
    private medicineService: MedicineService,
    private testService: TestService
  ) { }

  ngOnInit(): void {
    this.userService.findUsersByRole('PATIENT').subscribe(
      (response: ApiResponse) => {
        if (response.successful && Array.isArray(response.data)) {
          this.patients = response.data as UserModel[];
        } else {
          console.error('Failed to fetch patients:', response.message);
        }
      });

    this.medicineService.getAllMedicines().subscribe(
      (response: ApiResponse) => {
        if (response.successful && Array.isArray(response.data)) {
          this.medicines = response.data as Medicine[];
        } else {
          console.error('Failed to fetch medicines:', response.message);
        }
      });

    this.testService.getAllTests().subscribe((data: Test[]) => {
      this.tests = data;
    });
  }

  addMedicine(medicine: Medicine | null) {
    if (medicine && !this.selectedMedicines.includes(medicine)) {
      this.selectedMedicines.push(medicine);
    }
  }

  addTest(test: Test | null) {
    if (test && !this.selectedTests.includes(test)) {
      this.selectedTests.push(test);
    }
  }

  removeMedicine(index: number) {
    this.selectedMedicines.splice(index, 1);
  }

  removeTest(index: number) {
    this.selectedTests.splice(index, 1);
  }

  createPrescription() {
    this.prescription.medicine = this.selectedMedicines;
    this.prescription.test = this.selectedTests;
    this.prescription.doctor = [];
    this.prescriptionService.createPrescription(this.prescription).subscribe(response => {
      console.log('Prescription created:', response);
    });
  }
}
