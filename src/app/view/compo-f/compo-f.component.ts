import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'vin-app-compo-f',
  templateUrl: './compo-f.component.html',
  styleUrl: './compo-f.component.css'
})
export class CompoFComponent {
  name='vinit@raj';
  
  // count=0
  // product=0
  products:any=[]
  
  constructor(public cartIserv:CartService){
   }
 
  // removeFromCart(item:any){
  //   this.cartIserv=this.cartIserv.cartTotal.filter((data:any)=>)
   
  // }

// totalAmount(){
 
// }
removeFroMCart(item:any){
  this.cartIserv.deleteFromCart(item)
}
qtyHandler(item:any,qty:any){
  this.cartIserv.addToCart(item,qty);
}

  
 }



