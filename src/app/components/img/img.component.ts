import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>()
  imgDefault = './assets/images/perro.gif'
  counter = 0
  counterFn: number | undefined
  //

  constructor(){
    //Se carga antes del renderizado de la app
    //No corre funciones asincronas
    console.log('constructor')
  }
  ngOnChanges(changes: SimpleChanges): void {
    //Se carga antes del render y durante
    //Actualiza los cambios en los imputs --n veces
    console.log('ngOnChanges')
  }
  ngOnInit():void{
    //Se carga antes del render
    //Si se pueden correr cosas asincronas -- una sola vez
    console.log('ngOnInit')
    // this.counterFn = window.setInterval(()=>{
    //   this.counter += 1
    //   console.log('contador')
    // }, 1000)
  }
  ngAfterViewInit(): void {
    //Despues del render
    //Maneja los componentes hijos del componente en cuestion
    console.log('ngAfterView')
  }
  ngOnDestroy(): void {
    //Para eliminar completamente el componente y evitar fugas de memoria
    console.log('ngOnDestroy')
    window.clearInterval(this.counterFn)
  }
  imgError(){
    this.img  = this.imgDefault;
  }
  imgLoaded(){
    console.log('Loaded! hijo')
    this.loaded.emit(this.img)
  }
}
