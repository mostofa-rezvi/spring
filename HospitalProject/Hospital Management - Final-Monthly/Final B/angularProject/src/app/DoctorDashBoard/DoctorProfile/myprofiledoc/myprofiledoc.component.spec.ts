import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofiledocComponent } from './myprofiledoc.component';

describe('MyprofiledocComponent', () => {
  let component: MyprofiledocComponent;
  let fixture: ComponentFixture<MyprofiledocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyprofiledocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyprofiledocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
