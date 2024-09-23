import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreportdocComponent } from './addreportdoc.component';

describe('AddreportdocComponent', () => {
  let component: AddreportdocComponent;
  let fixture: ComponentFixture<AddreportdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddreportdocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddreportdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
