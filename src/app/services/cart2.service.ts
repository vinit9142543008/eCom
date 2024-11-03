import { Injectable } from '@angular/core';

export default interface cartData{
  id:number,
  iName:string,
  price:number,
  desc:string,
  productCat:string,
  qty:number,
  addedIntoCart:boolean
  img:any
}

@Injectable({
  providedIn: 'root'
})
export class Cart2Service {

  public cartDataA:cartData[]=[]
  constructor() { }

  addDataCart(item:cartData,qty:number){
   
   
  }
}
