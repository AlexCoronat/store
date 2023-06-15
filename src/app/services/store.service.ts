import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  total = 0
  constructor() { }

  shoppingList: Product[]=[]
  //recibe un producto como parametro y lo inserta a la lista vacía
  addProd(product: Product){
    this.shoppingList.push(product)
  }
  getTotal(){
    return this.total = this.shoppingList.reduce((suma, item) => suma + item.price,0)
  }
}
