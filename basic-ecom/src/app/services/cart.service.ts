import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Product[]>([])
  constructor() { }

  addTocart(product: Product){
    this.cart.set([...this.cart(), product])
  }

  removeFromCart(id:number){
    this.cart.set(this.cart().filter((p)=> p.id !== id))
  }
}
