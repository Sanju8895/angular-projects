import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-cart-summary',
  imports: [PrimaryButtonComponent],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.scss'
})
export class CartSummaryComponent {
  cartservice = inject(CartService)
  total = computed(()=>{
    let total = 0;
    for(const item of this.cartservice.cart()){
      total += item.price; 
    }
    return total;
  })
}
