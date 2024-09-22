import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewreceptionistComponent } from './viewreceptionist.component';

describe('ViewreceptionistComponent', () => {
  let component: ViewreceptionistComponent;
  let fixture: ComponentFixture<ViewreceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewreceptionistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewreceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
