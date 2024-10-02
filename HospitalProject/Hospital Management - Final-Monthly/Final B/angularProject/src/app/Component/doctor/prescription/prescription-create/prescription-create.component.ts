import { Component, OnInit } from '@angular/core';
import { Prescription } from '../prescription.model';
import { PrescriptionService } from '../prescription.service';
import { Role, UserModel } from '../../../../user/user.model';
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

  prescription: Prescription = new Prescription();
  medicines: Medicine[] = [];
  selectedMedicine!: Medicine;
  selectedMedicines: Medicine[] = [];

  selectedTests: Test[] = [];
  selectedTest!: Test;
  tests: Test[] = [];

  patients: UserModel[] = [];
  selectedPatientId!: number;
  selectedUser!: UserModel;

  constructor(
    private prescriptionService: PrescriptionService,
    private userService: UserService,
    private medicineService: MedicineService,
    private testService: TestService
  ) { }

  ngOnInit(): void {
    this.loadPatients();
    this.loadMedicines();
    this.loadTests();
  }

  loadPatients() {
    this.userService.findUsersByRole('PATIENT').subscribe(
      (response: ApiResponse) => {
        if (response.successful && Array.isArray(response.data)) {
          this.patients = response.data as UserModel[];
        } else {
          console.error('Failed to fetch patients:', response.message);
        }
      });
  }

  loadMedicines() {
    this.medicineService.getAllMedicines().subscribe(
      (response: ApiResponse) => {
        if (response.successful && Array.isArray(response.data)) {
          this.medicines = response.data as Medicine[];
        } else {
          console.error('Failed to fetch medicines:', response.message);
        }
      });
  }

  loadTests() {
    this.testService.getAllTests().subscribe((data: Test[]) => {
      this.tests = data;
    });
  }

  onUserSelect(): void {
    this.selectedUser = this.patients.find(patient => patient.id === this.selectedPatientId) || new UserModel();
  }

  onMedicineSelect(): void {
    if (this.selectedMedicine && !this.selectedMedicines.includes(this.selectedMedicine)) {
      this.selectedMedicines.push(this.selectedMedicine);
    }
  }

  onTestSelect(): void {
    if (this.selectedTest && !this.selectedTests.includes(this.selectedTest)) {
      this.selectedTests.push(this.selectedTest);
    }
  }

  removeMedicine(index: number) {
    this.selectedMedicines.splice(index, 1);
  }

  removeTest(index: number) {
    this.selectedTests.splice(index, 1);
  }

  createPrescription() {
    const prescription: Prescription = {
      prescriptionDate: new Date(),
      notes: this.prescription.notes || 'No notes provided.',
      medicine: this.selectedMedicines,
      user: this.selectedUser,
      test: this.selectedTests[0], // Assuming only one test will be added
      id: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.prescriptionService.createPrescription(prescription).subscribe({
      next: (newPrescription: Prescription) => {
        console.log('Prescription created successfully!', newPrescription);
        alert('Prescription created successfully');
      },
      error: (error) => {
        console.error('Error creating prescription!', error);
      }
    });
  }
}
