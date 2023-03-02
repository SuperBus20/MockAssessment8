import { Injectable } from '@angular/core';
import { IProduct } from './interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
    private inventory: IProduct[] = [
      { name: 'Acid Pops', productID: 'P1', price: 5 },
      { name: 'Exploding Bonbons', productID: 'P2', price: 6 },
      { name: 'Peppermint Toads', productID: 'P3', price: 8 },
      { name: 'Fizzing Whizzbees', productID: 'P4', price: 3 },
      { name: 'Chocolate Frogs', productID: 'P5', price: 10 }
    ];

  constructor() { }
  getAllProducts(): IProduct[] {
    return this.inventory;
  }
}
