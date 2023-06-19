import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  shoppingList: Product[]=[]
  private myCart = new BehaviorSubject<Product[]>([])
  //Convierte la variable myCart en un Observable
  myCart$ = this.myCart.asObservable()
  total = 0
  constructor() { }


  //recibe un producto como parametro y lo inserta a la lista vacía
  addProd(product: Product){
    this.shoppingList.push(product)
    this.myCart.next(this.shoppingList)
  }
  getTotal(){
    return this.total = this.shoppingList.reduce((suma, item) => suma + item.price,0)
  }
}
