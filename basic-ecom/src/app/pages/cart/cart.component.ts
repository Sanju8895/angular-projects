import { Component, inject, input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { Product } from '../../models/product.model';
import { CartSummaryComponent } from "./cart-summary/cart-summary.component";

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, CartSummaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartService = inject(CartService);
  item = input.required<Product>()

}
