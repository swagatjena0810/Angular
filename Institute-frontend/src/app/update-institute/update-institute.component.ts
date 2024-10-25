import { Component ,OnInit} from '@angular/core';
import { Institute } from '../models/Institute';
import { InstituteService } from '../institute.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-institute',
  templateUrl: './update-institute.component.html',
  styleUrls: ['./update-institute.component.css']
})
export class UpdateInstituteComponent implements OnInit {
  insId!:number
  institute:Institute=new Institute(0,"","","","","");
  constructor(private insservice:InstituteService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.insId=this.route.snapshot.params['insId']
    this.insservice.getInstituteById(this.insId).subscribe(data=>{
      this.institute=data
    })
  }
  submit(){
    this.insservice.updateInstitute(this.institute).subscribe(data=>{
      this.GoToInstituteList();
    },error=>console.log(error))
  }
  GoToInstituteList(){
    this.router.navigate(['/viewinstitutes'])
  }
}
