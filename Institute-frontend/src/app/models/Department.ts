export class Department{
    depId:number;
	departmentName:String;
	shortName:String;
	depCode:String;
	description:String;
	constructor(depId:number,departmentName:String, shortName:String,
        depCode:String,description:String){

            this.depId=depId;
            this.departmentName=departmentName;
            this.shortName=shortName;
            this.depCode=depCode;
            this.description=description;
        }
}