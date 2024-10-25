
export class Product{
    productId:number;
    productName:String;
    productImg:string;
    productDescription;
    productPrice:number;

    constructor(productId:number,productName:string,productImg:string
        ,productDescription:string, productPrice:number){
            this.productId=productId;
            this.productName=productName;
            this.productImg=productImg;
            this.productDescription=productDescription;
            this.productPrice=productPrice;
        }

}