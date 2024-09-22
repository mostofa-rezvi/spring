import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserporfileComponent } from './userporfile.component';

describe('UserporfileComponent', () => {
  let component: UserporfileComponent;
  let fixture: ComponentFixture<UserporfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserporfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserporfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
