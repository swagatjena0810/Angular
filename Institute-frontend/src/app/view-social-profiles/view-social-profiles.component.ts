import { Component , OnInit } from '@angular/core';
import { SocialProfile } from '../models/SocialProfile';
import { SocialProfileService } from '../social-profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-social-profiles',
  templateUrl: './view-social-profiles.component.html',
  styleUrls: ['./view-social-profiles.component.css']
})
export class ViewSocialProfilesComponent implements OnInit {
  profiles: SocialProfile[] = [];
  constructor(private spservice:SocialProfileService, private router:Router) { }

  
  ngOnInit(): void {
    this.getProfileList();
  }
  
  getProfileList(){
    this.spservice.viewProfiles().subscribe(data=>{
      this.profiles=data;
    })
  }
  updateProfile(profile:SocialProfile){
    this.router.navigate(['/updateprofile',profile])
  }
  deleteProfile(sId:number){
    this.spservice.deleteProfile(sId).subscribe(data=>{
      console.log(data);
     // this.router.navigateByUrl('/viewinstitutes')
      this.getProfileList();
      
    })
  }
}
