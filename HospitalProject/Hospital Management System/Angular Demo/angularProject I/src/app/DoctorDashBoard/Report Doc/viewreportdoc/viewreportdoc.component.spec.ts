import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreportdocComponent } from './viewreportdoc.component';

describe('ViewreportdocComponent', () => {
  let component: ViewreportdocComponent;
  let fixture: ComponentFixture<ViewreportdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewreportdocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewreportdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
