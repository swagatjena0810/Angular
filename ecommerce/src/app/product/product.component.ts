import { Component } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
  product:Product=new Product(0,"","","",0);

  constructor(private productService:ProductService, private router:Router){

  }

  addProduct():void{
    this.productService.addProduct(this.product);
    this.goToProductList();
    alert("Product added sucessfully");
  }
  goToProductList(){
    this.router.navigate(['/productlist']);
  }

}
