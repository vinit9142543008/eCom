import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[vinAppBtnDng]'
})
export class BtnDngDirective {

  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.border = 'none';
    this.el.nativeElement.style.padding = '5px 15px';
    this.el.nativeElement.style.background = 'red';
    this.el.nativeElement.style.color = '#fff';
   //  this.el.nativeElement.style['border-radius'] = '5px';
   this.el.nativeElement.style.borderRadius = '5px';
 
   }

}
