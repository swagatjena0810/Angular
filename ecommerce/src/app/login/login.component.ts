import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  user:User=new User(0,"","",0,"");

  constructor(private userservice:UserService, private router:Router){

  }

  ngOnInit(){}

  onLogin(){
    console.log(this.user);
    this.Login()
  }
  Login(){
    alert("Logged in sucessfully");
    this.router.navigate(["/userlist"]);
  }
}
