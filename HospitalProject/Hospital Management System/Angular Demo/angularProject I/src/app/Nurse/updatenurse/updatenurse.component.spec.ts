import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatenurseComponent } from './updatenurse.component';

describe('UpdatenurseComponent', () => {
  let component: UpdatenurseComponent;
  let fixture: ComponentFixture<UpdatenurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatenurseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatenurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
