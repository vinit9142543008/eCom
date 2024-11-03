import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any[],dataFilter:string, key:'item' | 'desc' | 'so', ag?:any): any{
   if(dataFilter){
   return value.filter((data)=>{
      return (data[key.toLowerCase()].toLowerCase()).match(dataFilter.toLowerCase())
    })
   }else{
    return value
   }
  }

}
