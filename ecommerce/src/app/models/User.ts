export class User {
    
    userId:number;
	fullName:string 
    userEmail:string
    userMobile:number
	userPassword:string 
    userRole:string

    constructor(userId:number,fullName:string,userEmail:string,
        userMobile:number,userPassword:string){
        this.userId=userId;
        this.fullName=fullName;
        this.userEmail=userEmail;
        this.userMobile=userMobile;
        this.userPassword=userPassword;
        this.userRole="USER";
    }
}