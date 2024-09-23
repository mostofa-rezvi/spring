import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentpntComponent } from './paymentpnt.component';

describe('PaymentpntComponent', () => {
  let component: PaymentpntComponent;
  let fixture: ComponentFixture<PaymentpntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentpntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentpntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
