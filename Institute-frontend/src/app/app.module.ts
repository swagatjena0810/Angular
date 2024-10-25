import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstituteComponent } from './institute/institute.component';
import { ViewInstitutesComponent } from './view-institutes/view-institutes.component';
import { DepartmentComponent } from './department/department.component';
import { ViewDepartmentsComponent } from './view-departments/view-departments.component';
import { SocialProfileComponent } from './social-profile/social-profile.component';
import { ViewSocialProfilesComponent } from './view-social-profiles/view-social-profiles.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateInstituteComponent } from './update-institute/update-institute.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    InstituteComponent,
    ViewInstitutesComponent,
    DepartmentComponent,
    ViewDepartmentsComponent,
    SocialProfileComponent,
    ViewSocialProfilesComponent,
    UpdateInstituteComponent,
    UpdateDepartmentComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
