import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../models/Department';
import { DepartmentService } from '../department.service';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit{
  public department:Department=new Department(0,"","","","");

  constructor(private route:Router, private depService:DepartmentService){}

    ngOnInit(): void {
      
    }

    submit():any{
      this.depService.addDepartment(this.department).subscribe(i=>this.department=i)
      this.route.navigate(["/viewdepartments"]);
    }

}
