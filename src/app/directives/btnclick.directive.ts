import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[vinAppBtnclick]'
})
export class BtnclickDirective {
  
  constructor(private el:ElementRef){
    this.el.nativeElement.style.color='bright'
    this.el.nativeElement.style.backgroundColor='grey'
  }
 


}
