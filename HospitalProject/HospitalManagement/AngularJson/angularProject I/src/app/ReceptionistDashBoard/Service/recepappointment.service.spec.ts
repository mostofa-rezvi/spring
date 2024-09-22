import { TestBed } from '@angular/core/testing';

import { RecepappointmentService } from './recepappointment.service';

describe('RecepappointmentService', () => {
  let service: RecepappointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecepappointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
