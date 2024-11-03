import { Component } from '@angular/core';
 

export default interface Product{
  id:number,
  pName:string,
  price:number,
  desc:string,
  productCat:string,
  qty:number,
  addedIntoCart:boolean
  img:any
} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice';
  toggleCart:boolean = false;
 
  constructor(){ // isko dependency injection
  }
  
  cartShow(){

  }
  searchItems:any=[];

 
  
}
