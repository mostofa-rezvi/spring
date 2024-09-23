import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingspntComponent } from './settingspnt.component';

describe('SettingspntComponent', () => {
  let component: SettingspntComponent;
  let fixture: ComponentFixture<SettingspntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingspntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingspntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
