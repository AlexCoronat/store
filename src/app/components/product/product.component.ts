import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    image: ''
  }
  //Se usa para poder exportar la variable
  @Output() addedProduct = new EventEmitter

  addToCar(){
    this.addedProduct.emit(this.product)
  }
  constructor(){}
  ngOnInit(): void {
  }

}
