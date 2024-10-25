import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstituteComponent } from './institute/institute.component';
import { ViewInstitutesComponent } from './view-institutes/view-institutes.component';
import { UpdateInstituteComponent } from './update-institute/update-institute.component';
import { DepartmentComponent } from './department/department.component';
import { ViewDepartmentsComponent } from './view-departments/view-departments.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { SocialProfileComponent } from './social-profile/social-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ViewSocialProfilesComponent } from './view-social-profiles/view-social-profiles.component';

const routes: Routes = [
  {path:'addins', component:InstituteComponent},
  {path:'viewinstitutes' , component:ViewInstitutesComponent},
  {path:'updateins', component:UpdateInstituteComponent},
  {path:'adddep',component:DepartmentComponent},
  {path:'viewdepartments', component:ViewDepartmentsComponent},
  {path:'updatedep', component: UpdateDepartmentComponent},
  {path:'addprofile', component:SocialProfileComponent},
  {path:'updateprofile', component:UpdateProfileComponent},
  {path:'viewprofiles', component:ViewSocialProfilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
