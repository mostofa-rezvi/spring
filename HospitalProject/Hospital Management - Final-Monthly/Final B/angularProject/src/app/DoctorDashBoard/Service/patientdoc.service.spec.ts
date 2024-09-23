import { TestBed } from '@angular/core/testing';

import { PatientdocService } from './patientdoc.service';

describe('PatientdocService', () => {
  let service: PatientdocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientdocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
