import { Component , OnInit} from '@angular/core';
import { SocialProfile } from '../models/SocialProfile';
import { Router } from '@angular/router';
import { SocialProfileService } from '../social-profile.service';

@Component({
  selector: 'app-social-profile',
  templateUrl: './social-profile.component.html',
  styleUrls: ['./social-profile.component.css']
})
export class SocialProfileComponent implements OnInit{
  public profile:SocialProfile=new SocialProfile(0,"","","","","","");

  constructor(private route:Router, private profileService:SocialProfileService){}

  ngOnInit(): void {
    
  }

  submit():any{
    this.profileService.addProfile(this.profile).subscribe(i=>this.profile=i)
    this.route.navigate(["/viewprofiles"]);
  }
}
