export class Institute{
    insId:number;
    instituteName:String;
    shortName:String;
    instituteCode:String;
    email:string;
    contactNumber:String;

    constructor(insId:number,instituteName:String,shortName:String,instituteCode:String,
        email:string,contactNumber:String){
            this.insId=insId;
            this.instituteName=instituteName;
            this.shortName=shortName;
            this.instituteCode=instituteCode;
            this.email=email;
            this.contactNumber=contactNumber;
        }

}