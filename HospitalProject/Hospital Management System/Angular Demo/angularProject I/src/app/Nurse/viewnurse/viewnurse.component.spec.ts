import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnurseComponent } from './viewnurse.component';

describe('ViewnurseComponent', () => {
  let component: ViewnurseComponent;
  let fixture: ComponentFixture<ViewnurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewnurseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewnurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
