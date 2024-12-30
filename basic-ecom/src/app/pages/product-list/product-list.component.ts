import { Component, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  async ngOnInit(){
    try{
      const res= await fetch(
        'https://fakestoreapi.com/products'
        );
      const data = await res.json();
      this.products.set(data);
    }catch(err){
      console.log(err,"featch Error")
    }
  
  }
products = signal<Product[]>([
  // {
  //   id: 1,
  //   title: 'Fjallraven - fold No. 1 backpack, Fits 15',
  //   price:101.2,
  //   image:"https://massimiliano.in/wp-content/uploads/2022/12/0W8A1824-scaled.jpg",
  //   stock: 0
  // },
  // {
  //   id: 2,
  //   title: 'Fjallraven - fold No. 1 backpack, Fits 15',
  //   price:101.2,
  //   image:"https://massimiliano.in/wp-content/uploads/2022/12/0W8A1824-scaled.jpg",
  //   stock: 1
  // },
  // {
  //   id: 3,
  //   title: 'Fjallraven - fold No. 1 backpack, Fits 15',
  //   price:101.2,
  //   image:"https://massimiliano.in/wp-content/uploads/2022/12/0W8A1824-scaled.jpg",
  //   stock: 20
  // },
  // {
  //   id: 4,
  //   title: 'Fjallraven - fold No. 1 backpack, Fits 15',
  //   price:101.2,
  //   image:"https://massimiliano.in/wp-content/uploads/2022/12/0W8A1824-scaled.jpg",
  //   stock: 0
  // }
]);

}
