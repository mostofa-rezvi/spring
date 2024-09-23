import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofappointmentComponent } from './listofappointment.component';

describe('ListofappointmentComponent', () => {
  let component: ListofappointmentComponent;
  let fixture: ComponentFixture<ListofappointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListofappointmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
