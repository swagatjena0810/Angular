import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSocialProfilesComponent } from './view-social-profiles.component';

describe('ViewSocialProfilesComponent', () => {
  let component: ViewSocialProfilesComponent;
  let fixture: ComponentFixture<ViewSocialProfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSocialProfilesComponent]
    });
    fixture = TestBed.createComponent(ViewSocialProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
