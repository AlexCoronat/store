import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  constructor(
    private productsService: ProductsService,
    private storeService: StoreService
  ){}
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data =>{
      this.products = data
    })
  }
  total = 0
  shoppingList: Product[]=[]
  products: Product[] = []
  //recibe un producto como parametro y lo inserta a la lista vacía
  addProdToCar(product: Product){
    this.storeService.addProd(product)
    this.total = this.storeService.getTotal()
    console.log(this.total)
  }
}
