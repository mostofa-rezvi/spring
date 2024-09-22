import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletenurseComponent } from './deletenurse.component';

describe('DeletenurseComponent', () => {
  let component: DeletenurseComponent;
  let fixture: ComponentFixture<DeletenurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletenurseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletenurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
