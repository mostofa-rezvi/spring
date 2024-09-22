import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportpntComponent } from './reportpnt.component';

describe('ReportpntComponent', () => {
  let component: ReportpntComponent;
  let fixture: ComponentFixture<ReportpntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportpntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportpntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
