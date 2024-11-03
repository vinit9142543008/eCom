import { Injectable } from '@angular/core';
import Product from '../view/compo-g/compo-g.component';
import { BehaviorSubject } from 'rxjs';
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
@Injectable({
  providedIn: 'root'
})

export class CartService {

  private cart:CartProduct[] = [];
  public cartTotal:any=0;

  states:string[] = [];
  
  private cartItems$:BehaviorSubject<CartProduct[]> = new BehaviorSubject<CartProduct[]>([]);
  public cart$ = this.cartItems$.asObservable();
 
  constructor() {
    this.cartItems$.next(this.cart);
   }

 isItemExsitinArr(item:Product){
 let itemExsit:boolean=false;
 for(let i=0; i< this.cart.length; i++){
  if(this.cart[i]?.id!== item?.id){
 return itemExsit= true;
  }
  else{
   itemExsit =false
  }
 }
 return itemExsit
 }
  

  addToCart(item:Product,qty?:number){
    // if(!this.isItemExistInArr(item)){
    //   this.cart.push({...item, totalPrice: item.qty * item.price
    //   })
    // }
    // this.cartItems$.next(this.cart);
    // this.getCartTotal();
    // console.log(this.cart);
    // this.sortArr()
     
    // if(!this.isItemExsitinArr(item)){
    //   this.cart.push({...item, totalPrice: item.qty*item.price})
    // }
    let datanm= this.cart.find(data => item.pName == data.pName);
    if(datanm){
      console.log('item already in cart')
    }
    else{
      this.cart.push({...item,totalPrice: item.qty*item.price})
    }
    this.cartItems$.next(this.cart);
   this.getCartTotal();

    }

    

    getCartTotal(){
      let cartTotal = 0;
      for(let i =0; i < this.cart.length; i++){
        cartTotal += this.cart[i].totalPrice;
      }
      this.cartTotal = cartTotal;
      return cartTotal
    }

   

    sortArr (){
    
    
    //   let arr:any = [];
    //   this.cart.forEach((item)=>{
    //     arr.push(item.pName);
    //   });
    //   let arr2 :any = arr.sort();

    //   let result:any = [];
    //   for(let i = 0; i < arr2.length; i++){
    //     if(arr2[i] === this.cart[i]){
    //       console.log('---', i)
    //     }
    //    for(let j=0; j<=i; j++){
    //     if(result[j]===this.cart[i]){
    //       console.log('aaaaaaaa', j)
    //     }
    //    }

    
    //   }
      

    // console.log('arr 2 -> ', result);

    }
  

    deleteFromCart( item:Product){
  
  const index = this.cart.findIndex((data:any )=> item.pName !== data.pName);
    if (index !== 0) {
      this.cart.splice(0,1); 
    }
    
  // this.cart= this.cart.filter((item,index)=> {i!==index});
  
 
    }

  }
