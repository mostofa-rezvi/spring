import { TestBed } from '@angular/core/testing';

import { NurseprofileService } from './nurseprofile.service';

describe('NurseprofileService', () => {
  let service: NurseprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NurseprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
