export class SocialProfile{
    sId:number;
	homePageUrl:String;
	facebookProfileLink:String;
	twitterProfileLink:String;
	linkedinProfileLink:String;
	pinterestProfileLink:String;
	googlePlusProfileLink:String;

    constructor(sId:number,homePageUrl:String,facebookProfileLink:String,
        twitterProfileLink:String,linkedinProfileLink:String,
        pinterestProfileLink:String,googlePlusProfileLink:String){
            this.sId=sId;
            this.homePageUrl=homePageUrl;
            this.facebookProfileLink=facebookProfileLink;
            this.twitterProfileLink=twitterProfileLink;
            this.linkedinProfileLink=linkedinProfileLink;
            this.pinterestProfileLink=pinterestProfileLink;
            this.googlePlusProfileLink=googlePlusProfileLink;
        }
}