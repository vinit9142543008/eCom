import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[vinAppCard]'
})
export class CardDirective {

  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.border = 'none';
    this.el.nativeElement.style.padding = '15px';
    this.el.nativeElement.style.background = '#ff';
    this.el.nativeElement.style.color = '#000';
    this.el.nativeElement.style.display = 'inline-block';
    this.el.nativeElement.style.float = 'left';
    this.el.nativeElement.style.margin = '20px';
    this.el.nativeElement.style.width='25%'
    this.el.nativeElement.style.hight='10%'
   this.el.nativeElement.style.borderRadius = '20px';
   this.el.nativeElement.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
   }
 

}
