import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDepartmentsComponent } from './view-departments.component';

describe('ViewDepartmentsComponent', () => {
  let component: ViewDepartmentsComponent;
  let fixture: ComponentFixture<ViewDepartmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDepartmentsComponent]
    });
    fixture = TestBed.createComponent(ViewDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
