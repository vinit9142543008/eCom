import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ItemMangService } from '../../services/item-mang.service';
@Component({
  selector: 'vin-app-shoping',
  templateUrl: './shoping.component.html',
  styleUrl: './shoping.component.css'
})
export class ShopingComponent {

  constructor(private cart:ItemMangService){}
// cartCount:any=0;

// items=[
//   {name:'Book', price:100},
//   {name:'pen',price:14},
//   {name:'pencil', price:8}
// ];
// ngOnInit(): void {
//   this.updateCartCount
  
// }

// addToCart(a:any,b:any){

//   this.cart.addToCart(a)
//   this.updateCartCount
//   // console.log('Added')

// }
// updateCartCount(): void {
//   this.cartCount = this.cart.countI();
// }

count:number=0;
totalPrice:number=0;
  itemStore:any=[]
  items=[
    {name:'Book', price:100},
    {name:'pen',price:14},
    {name:'pencil', price:8}
  ]
  
  
  // addToCart(item:any,i:any){
  //   this.itemStore.push(item);
  //   this.countI();
  //   console.log('add successfully')
  // }
  
  // countI()
  // {
  //   this.count=this.itemStore.length
  // }
  addToCart(item: any, i: any): void {
    this.cart.addItem(item);  
    this.countI(); 
    console.log('Added successfully');
  }

  countI(): void {
    this.count = this.cart.getItemCount(); 
    this.totalPrice = this.cart.getTotalPrice();
  }

}