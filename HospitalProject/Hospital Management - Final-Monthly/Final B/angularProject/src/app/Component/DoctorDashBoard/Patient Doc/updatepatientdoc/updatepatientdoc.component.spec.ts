import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepatientdocComponent } from './updatepatientdoc.component';

describe('UpdatepatientdocComponent', () => {
  let component: UpdatepatientdocComponent;
  let fixture: ComponentFixture<UpdatepatientdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatepatientdocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatepatientdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
