import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatereportdocComponent } from './updatereportdoc.component';

describe('UpdatereportdocComponent', () => {
  let component: UpdatereportdocComponent;
  let fixture: ComponentFixture<UpdatereportdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatereportdocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatereportdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
