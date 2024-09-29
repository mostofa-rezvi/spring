import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../test.service';
import { Test } from '../test.model';

@Component({
  selector: 'app-test-update',
  templateUrl: './test-update.component.html',
})
export class TestUpdateComponent implements OnInit {
  test: Test | null = null; // To hold the test being updated
  errorMessage: string = ''; // To hold error messages

  constructor(
    private testService: TestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id']; // Get the test ID from the route parameters
    this.getTestById(id); // Fetch the test data for the given ID
  }

  getTestById(id: number) {
    this.testService.getTestById(id).subscribe(
      (response) => {
        this.test = response.data; // Assuming response.data contains the test
      },
      (error) => {
        console.error('Error fetching test:', error);
        this.errorMessage = 'Could not fetch test. Please try again later.';
      }
    );
  }

  updateTest() {
    if (this.test) {
      this.testService.updateTest(this.test.id, this.test).subscribe(
        (response) => {
          console.log('Test updated successfully!', response);
          this.router.navigate(['/tests']); // Redirect to tests list after updating
        },
        (error) => {
          console.error('Error updating test:', error);
          this.errorMessage = 'Could not update test. Please try again later.';
        }
      );
    }
  }
}
