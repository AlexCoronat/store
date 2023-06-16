import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseEnter(){
    this.elementRef.nativeElement.style.backgroundColor = '#D1E3D6'
    //this.elementRef.nativeElement.style.color = '#FFFFFF'
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.elementRef.nativeElement.style.backgroundColor = ''
    //this.elementRef.nativeElement.style.color = '#000000'
  }
  constructor(private elementRef: ElementRef) {
    //this.elementRef.nativeElement.style.backgroundColor = 'red'
  }

}
