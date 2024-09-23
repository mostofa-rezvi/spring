import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentpntComponent } from './appointmentpnt.component';

describe('AppointmentpntComponent', () => {
  let component: AppointmentpntComponent;
  let fixture: ComponentFixture<AppointmentpntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentpntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentpntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
