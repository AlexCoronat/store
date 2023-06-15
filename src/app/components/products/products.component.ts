import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  total = 0
  shoppingList: Product[]=[]
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
  //recibe un producto como parametro y lo inserta a la lista vacía
  addProdToCar(product: Product){
    this.shoppingList.push(product)
    this.total = this.shoppingList.reduce((suma, item) => suma + item.price,0)
    console.log(this.total)
  }
}
