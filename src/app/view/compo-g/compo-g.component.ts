import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

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
  selector: 'vin-app-compo-g',
  templateUrl: './compo-g.component.html',
  styleUrl: './compo-g.component.css'
})
export class CompoGComponent {
  products:Product[] = [
    { id:1, productCat:'Education', pName:'Play Book', desc:'This book will help you to learn gaming', price:500, qty:1, addedIntoCart:false,img:'https://tse4.mm.bing.net/th?id=OIP.MjdMEdESeeWaUme2JCdWBgAAAA&pid=Api&P=0&h=180'},
    { id:2,productCat:'Education', pName:'Preparation Book', desc:'This book will help you to crack exams', price:1000, qty:1,  addedIntoCart:false, img:'https://i5.walmartimages.com/asr/e17c0b7c-4b74-4d32-8c2d-b235462d875a_2.1c39ceaf65c388ecca0b4772ebdaff02.jpeg'},
    { id:3,productCat:'Phone', pName:'RedMi', desc:'This is newly launched mobile', price:5000, qty:1,  addedIntoCart:false,img:'https://supplyleader.com/preview_files/179952.jpg'},
    { id:4,productCat:'Phone', pName:'Real Me', desc:'This is an advanced featured phone', price:1500,qty:1,  addedIntoCart:false, img:'https://i5.walmartimages.com/asr/e17c0b7c-4b74-4d32-8c2d-b235462d875a_2.1c39ceaf65c388ecca0b4772ebdaff02.jpeg'}  
  ];
  value:any="this is path of our files";

  showAll:boolean = false;
  product=0;

  filter:string = '';

  constructor(public cartSer:CartService){

  }

    addToCart(item:any){
      console.log(item)
      this.cartSer.addToCart(item);
      }

      qtyHandler(item:Product,qty:any){
        this.cartSer.addToCart(item,qty);
      }
    }

