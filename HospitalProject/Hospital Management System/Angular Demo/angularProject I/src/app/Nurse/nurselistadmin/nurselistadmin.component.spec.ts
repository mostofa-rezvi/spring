import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurselistadminComponent } from './nurselistadmin.component';

describe('NurselistadminComponent', () => {
  let component: NurselistadminComponent;
  let fixture: ComponentFixture<NurselistadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NurselistadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurselistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
