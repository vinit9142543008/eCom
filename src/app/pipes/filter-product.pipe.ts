import { Pipe, PipeTransform } from '@angular/core';
import Product from '../view/compo-g/compo-g.component';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(value: Product[], ...args: unknown[]): any {

  let index:any=args[0];
  if(index){
    return value.filter((item:Product)=> {
      item.pName.toLowerCase().match(index.toLowerCase())
    })
  }
  else{
    return value
  }
}
}
