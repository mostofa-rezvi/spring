import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistlistadminComponent } from './receptionistlistadmin.component';

describe('ReceptionistlistadminComponent', () => {
  let component: ReceptionistlistadminComponent;
  let fixture: ComponentFixture<ReceptionistlistadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceptionistlistadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionistlistadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
