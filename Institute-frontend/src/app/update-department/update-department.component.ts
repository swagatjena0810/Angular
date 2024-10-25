import { Component , OnInit} from '@angular/core';
import { Department } from '../models/Department';
import { DepartmentService } from '../department.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit {
  depId!:number
  department:Department=new Department(0,"","","","");
  constructor(private depservice:DepartmentService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.depId=this.route.snapshot.params['depId']
    this.depservice.getDepartmentId(this.depId).subscribe(data=>{
      this.department=data
    })
  }
  submit(){
    this.depservice.updateDepartment(this.department).subscribe(data=>{
      this.GoToDepartmentList();
    },error=>console.log(error))
  }
  GoToDepartmentList(){
    this.router.navigate(['/viewdepartments'])
  }
}
