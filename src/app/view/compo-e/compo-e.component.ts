import { Component } from '@angular/core';
import { Cart2Service } from '../../services/cart2.service';


// export default interface itemData{
//   id:number,
//   iName:string,
//   price:number,
//   desc:string,
//   productCat:string,
//   qty:number,
//   addedIntoCart:boolean
//   img:any
// }


@Component({
  selector: 'vin-app-compo-e',
  templateUrl: './compo-e.component.html',
  styleUrl: './compo-e.component.css'
})
export class CompoEComponent { 

  name='';
  price='';
  desc='';

  dataNm:any='vinit singh RAJPUT';

  itemDis:any=[];
  itemData=[
    {item:'',rate:null,description:""}
  ]

  addDin(name:any,price:any,desc:any){
    if(name&&price&&desc){
      this.itemData.push({item: name, rate:price,description:desc});
      this.itemDis();
    }
    else{
      alert ('please fill all fields')
    } 
  
 }
//  constructor(){
// console.log('vvvv',this.dataNm)
// console.log('a',this.methodNm)
// this.methodNm('a')
//  this.methodNm('a')
//  }

 
// methodNm(a:any){
//   console.log('BBBBBB')
//   this.dataNm
//   console.log('this is now searching' + '     '+  this.dataNm)
// }

}