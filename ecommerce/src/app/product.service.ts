import { Injectable } from '@angular/core';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products:Product[]=[];

  getProducts():Product[]{
    return this.products;
  }

  addProduct(product:Product):void{
    this.products.push(product);
  }

  updateProduct(productId:number, updateProduct:Product){
    this.products[productId]=updateProduct;
  }

  deleteProduct(productId: number):void{
    this.products.splice(productId,1)
  }

}
