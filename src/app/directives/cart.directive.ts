import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[vinAppCart]'
})
export class CartDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.backgroundColor='brown';
    this.el.nativeElement.style.color='blue';
    this.el.nativeElement.style.width='auto'
  } 

}
