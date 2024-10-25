import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users:User[]=[];

  constructor(private userservice: UserService){
  }

  ngOnInit(): void {
    this.users=this.userservice.getUsers();
  }
  deleteUser(userId:number):void{
    this.userservice.deleteUser(userId);

  }
}
