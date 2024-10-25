import { Component , OnInit} from '@angular/core';
import { Institute } from '../models/Institute';
import { Router } from '@angular/router';
import { InstituteService } from '../institute.service';

@Component({
  selector: 'app-institute',
  templateUrl: './institute.component.html',
  styleUrls: ['./institute.component.css']
})
export class InstituteComponent implements OnInit{
    public institute:Institute=new Institute(0,"","","","","");

    constructor(private route:Router, private insService:InstituteService){}

    ngOnInit(): void {
      
    }

    submit():any{
      this.insService.addInstitute(this.institute).subscribe(i=>this.institute=i)
      this.route.navigate(["/viewinstitutes"]);
    }
}
