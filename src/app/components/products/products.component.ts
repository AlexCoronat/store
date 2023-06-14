import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Bicicleta',
      price: 100,
      image: './assets/images/bike.jpg'
  },
  {
      id: 2,
      name: 'Muñeca de trapo',
      price: 180,
      image: './assets/images/toy.jpg'
  },
  {
      id: 3,
      name: 'Libros',
      price: 120,
      image: './assets/images/books.jpg'
  }
  ]
}
