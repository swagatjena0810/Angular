import { Component } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../user.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user:User=new User(0,"","",0,"");

  constructor(private userservice:UserService ,private router:Router){}

  
  registerUser():void{
    this.userservice.registerUser(this.user);
    this.goToLogin();
    alert("Registered Sucessfully");
  }
  goToLogin(){
    this.router.navigate(['/login'])
  }

}
