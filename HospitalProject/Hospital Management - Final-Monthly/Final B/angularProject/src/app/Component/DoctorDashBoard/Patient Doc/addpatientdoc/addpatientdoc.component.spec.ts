import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpatientdocComponent } from './addpatientdoc.component';

describe('AddpatientdocComponent', () => {
  let component: AddpatientdocComponent;
  let fixture: ComponentFixture<AddpatientdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddpatientdocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpatientdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
