import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let str = value.split(' ');
    let output:string = '';
    str.filter((item,i)=> {
      let val = item.substring(0,1).toUpperCase() + item.substring(1,item.length).toLowerCase();
      output += val +`${i <= str.length - 1 ? ' ' : ''}`;
    });
    return output
  }

}
