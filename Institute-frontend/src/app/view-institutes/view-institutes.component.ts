import { Component , OnInit } from '@angular/core';
import { InstituteService } from '../institute.service';
import { Institute } from '../models/Institute';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-institutes',
  templateUrl: './view-institutes.component.html',
  styleUrls: ['./view-institutes.component.css']
})
export class ViewInstitutesComponent implements OnInit {


  institutes: Institute[] = [];
  constructor(private insservice:InstituteService, private router:Router) { }

  
  ngOnInit(): void {
    this.getInstituteList();
  }
  
  getInstituteList(){
    this.insservice.viewInstitutes().subscribe(data=>{
      this.institutes=data;
    })
  }
  updateInstitute(institute:Institute){
    this.router.navigate(['/updateins',institute])
  }
  deleteInstitute(insId:number){
    this.insservice.deleteInstitute(insId).subscribe(data=>{
      console.log(data);
     // this.router.navigateByUrl('/viewinstitutes')
      this.getInstituteList();
      
    })
  }
  
  
}
