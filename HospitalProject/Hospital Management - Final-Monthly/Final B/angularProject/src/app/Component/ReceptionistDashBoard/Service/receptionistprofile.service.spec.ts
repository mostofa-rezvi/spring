import { TestBed } from '@angular/core/testing';

import { ReceptionistprofileService } from './receptionistprofile.service';

describe('ReceptionistprofileService', () => {
  let service: ReceptionistprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceptionistprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
