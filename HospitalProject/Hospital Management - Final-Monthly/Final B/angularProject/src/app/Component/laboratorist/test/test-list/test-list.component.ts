import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Test } from '../test.model';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
})
export class TestListComponent implements OnInit {
  tests: Test[] = [];
  errorMessage: string = '';

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.getAllTests(); 
  }

  // getAllTests() {
  //   this.testService.getAllTests().subscribe(
  //     (response) => {
  //       this.tests = response.data || []; // Assuming response.data contains the tests
  //     },
  //     (error) => {
  //       console.error('Error fetching tests:', error);
  //       this.errorMessage = 'Could not fetch tests. Please try again later.';
  //     }
  //   );
  // } 

  getAllTests() {
    this.testService.getAllTests().subscribe(
      (response) => {
        if (response.data && Array.isArray(response.data)) {
          this.tests = response.data; // Ensure that this is an array
        } else if (response.data && response.data.tests) {
          this.tests = response.data.tests; // Adjust based on the response structure
        } else {
          this.tests = []; // Handle any case where no data is returned
        }
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
