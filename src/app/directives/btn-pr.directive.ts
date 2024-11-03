import { Directive, ElementRef, Input, Renderer2, viewChild } from '@angular/core';

@Directive({
  selector: '[vinAppBtnPr]'
}) 
export class BtnPrDirective {

  constructor(private el:ElementRef) { 
   this.el.nativeElement.style.border = 'none';
   this.el.nativeElement.style.padding = '5px 15px';
   this.el.nativeElement.style.background = 'royalblue';
   this.el.nativeElement.style.color = '#fff';
  this.el.nativeElement.style.borderRadius = '5px';

  }
  

}
