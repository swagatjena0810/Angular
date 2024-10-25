import { Component, OnInit } from '@angular/core';
import { SocialProfile } from '../models/SocialProfile';
import { SocialProfileService } from '../social-profile.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  sId!:number
  profile:SocialProfile=new SocialProfile(0,"","","","","","");
  constructor(private spservice:SocialProfileService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.sId=this.route.snapshot.params['sId']
    this.spservice.getProfileById(this.sId).subscribe(data=>{
      this.profile=data
    })
  }
  submit(){
    this.spservice.updateProfile(this.profile).subscribe(data=>{
      this.GoToProfileList();
    },error=>console.log(error))
  }
  GoToProfileList(){
    this.router.navigate(['/viewprofiles']);
  }
}
