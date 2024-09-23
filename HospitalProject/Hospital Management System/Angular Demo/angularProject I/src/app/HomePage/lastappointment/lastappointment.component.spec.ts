import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastappointmentComponent } from './lastappointment.component';

describe('LastappointmentComponent', () => {
  let component: LastappointmentComponent;
  let fixture: ComponentFixture<LastappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastappointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
