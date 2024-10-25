import { Injectable } from '@angular/core';
import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users:User[]=[];

  getUsers():User[]{
    return this.users;
  }

  registerUser(user:User):void{
    this.users.push(user);
  }
  login(user:User){
    
  }

  updateProfile(userId:number, upuser:User){
    this.users[userId]=upuser;
  }

  deleteUser(userId: number):void{
    this.users.splice(userId,1)
  }
}
