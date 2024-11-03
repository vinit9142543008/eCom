import { Component } from '@angular/core';
import { CartService } from './services/cart.service';
import { Cart2Service } from './services/cart2.service';
 

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
 
  constructor(public cartService:CartService){ // isko dependency injection
  }
  
  cartShow(){

  }
  searchItems:any=[];

 
  
}
