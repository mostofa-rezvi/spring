import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorpntComponent } from './doctorpnt.component';

describe('DoctorpntComponent', () => {
  let component: DoctorpntComponent;
  let fixture: ComponentFixture<DoctorpntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorpntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorpntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
