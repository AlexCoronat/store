import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  mostrar = true
  onLoaded(img: string){
    console.log('Loaded! Parent from '+ img)
  }
  mostrarImagen(){
    this.mostrar = !this.mostrar
  }

}
