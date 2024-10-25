import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInstituteComponent } from './update-institute.component';

describe('UpdateInstituteComponent', () => {
  let component: UpdateInstituteComponent;
  let fixture: ComponentFixture<UpdateInstituteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateInstituteComponent]
    });
    fixture = TestBed.createComponent(UpdateInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
