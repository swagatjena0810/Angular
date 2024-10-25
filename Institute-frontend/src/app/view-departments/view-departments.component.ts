import { Component ,OnInit} from '@angular/core';
import { Department } from '../models/Department';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-departments',
  templateUrl: './view-departments.component.html',
  styleUrls: ['./view-departments.component.css']
})
export class ViewDepartmentsComponent implements OnInit{

  departments: Department[] = [];
  constructor(private depservice:DepartmentService, private router:Router) { }

  
  ngOnInit(): void {
    this.getDepartmentList();
  }
  
  getDepartmentList(){
    this.depservice.viewDepartments().subscribe(data=>{
      this.departments=data;
    })
  }
  updateDepartment(department:Department){
    this.router.navigate(['/updatedep',department])
  }
  deleteDepartment(depId:number){
    this.depservice.deleteDepartment(depId).subscribe(data=>{
      console.log(data);
     // this.router.navigateByUrl('/viewinstitutes')
      this.getDepartmentList();
      
    })
  }
}
