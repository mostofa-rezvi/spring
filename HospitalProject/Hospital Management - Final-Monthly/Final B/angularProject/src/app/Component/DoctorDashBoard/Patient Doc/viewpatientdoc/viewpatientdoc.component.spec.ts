import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpatientdocComponent } from './viewpatientdoc.component';

describe('ViewpatientdocComponent', () => {
  let component: ViewpatientdocComponent;
  let fixture: ComponentFixture<ViewpatientdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewpatientdocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpatientdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
