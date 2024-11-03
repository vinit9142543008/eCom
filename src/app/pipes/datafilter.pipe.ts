import { Pipe, PipeTransform } from '@angular/core';
export default interface CartProduct{
  id:number,
  pName:string,
  price:number,
  desc:string,
  productCat:string,
  qty:number,
  totalPrice:number,
  img:any
}

@Pipe({
  name: 'datafilter'
})
export class DatafilterPipe implements PipeTransform {

  transform(value:any[], gender:string, search:"pName" | "gender" ) {
    if(gender){
      return value.filter((name)=>{
        return(name[search.toLowerCase()].toLowerCase()).match(gender.toLowerCase());
      })
    }
    else{
      return value
    }
  }
}
