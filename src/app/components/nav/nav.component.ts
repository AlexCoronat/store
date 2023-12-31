import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{
  counter = 0
  constructor(private storeService: StoreService){ }
  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products =>{
      this.counter = products.length
    })
  }
  showMenu = false;
  activeMenu(){
    this.showMenu = !this.showMenu
  }
}
