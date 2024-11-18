import { Injectable } from '@angular/core';
import { Firestore, collection, query, where, getDocs, setDoc, doc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ItemMangService {

  constructor(private firestore: Firestore) {}


  // count:number=0;
  // itemStore:any=[]
  // items=[
  //   {name:'Book', price:100},
  //   {name:'pen',price:14},
  //   {name:'pencil', price:8}
  // ]
  
  
  // addToCart(item:any){
  //   this.itemStore.push(item);
  //   this.countI();
  //   console.log('add successfully')
  // }
  
  // countI()
  // {
  //   this.count=this.itemStore.length
  // }

  private cartItems: any[] = [];

  addItem(item: any): void {
    this.cartItems.push(item);
  }

  
  getItems(): any[] {
    return this.cartItems;
  }

  getItemCount(): number {
    return this.cartItems.length;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  removeItem(item:any){
    const index=this.cartItems.indexOf(item);
    if(index!==-1){
      this.cartItems.splice(index,1)
    }
   
  }
  
}