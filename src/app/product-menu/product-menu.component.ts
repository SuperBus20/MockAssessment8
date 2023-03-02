import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { IProduct } from '../interfaces/product';

@Component({
  selector: 'app-product-menu',
  templateUrl: './product-menu.component.html',
  styleUrls: ['./product-menu.component.css']
})
export class ProductMenuComponent implements OnInit {
  products!: IProduct[];

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }
}
