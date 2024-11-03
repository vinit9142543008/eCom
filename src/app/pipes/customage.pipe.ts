import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customage'
})
export class CustomagePipe implements PipeTransform {

  transform(value: number,  age:number)  {
    if(age>=25)
      return " Sr. "  +  value;

    else 
    return " Jr. "  +  value;
  }


}
