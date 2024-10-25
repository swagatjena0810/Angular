import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit{
  products:Product[]=[]
  
  constructor(private productService:ProductService){

  }

  ngOnInit(): void {
    this.products=this.productService.getProducts();
  }
}
