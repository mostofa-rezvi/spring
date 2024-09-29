import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Test } from '../test.model';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
})
export class TestListComponent implements OnInit {
  tests: Test[] = []; // Array to hold the list of tests
  errorMessage: string = ''; // To hold error messages

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.getAllTests(); // Fetch all tests on component initialization
  }

  getAllTests() {
    this.testService.getAllTests().subscribe(
      (response) => {
        this.tests = response.data || []; // Assuming response.data contains the tests
      },
      (error) => {
        console.error('Error fetching tests:', error);
        this.errorMessage = 'Could not fetch tests. Please try again later.';
      }
    );
  }

  deleteTest(id: number) {
    this.testService.deleteTest(id).subscribe(
      () => {
        this.tests = this.tests.filter(test => test.id !== id); // Remove the deleted test from the list
      },
      (error) => {
        console.error('Error deleting test:', error);
      }
    );
  }
}
