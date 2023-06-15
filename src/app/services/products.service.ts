import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getAllProducts(){
    //Es necesario tipar la peticion si tenemos interfaces en este caso de Producto despues del
    //get<Prouct>. Como es una lista es necesario indicar que es un array get<Prouct[]>
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
  }
}
