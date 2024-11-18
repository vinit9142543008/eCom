import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ItemMangService } from '../../services/item-mang.service';

@Component({
  selector: 'vin-app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems: any[] = [];
  itemCount: number = 0;
  totalPrice: number = 0;
  
  constructor(private authService: AuthService, private cartService:ItemMangService) {}

  ngOnInit(): void {
    // this.cartItems = this.cartService.getItems(); 
    // this.itemCount = this.cartService.getItemCount();
    // this.totalPrice=this.cartService.getTotalPrice();
    this.updateCartData()
  }

  updateCartData(): void {
    this.cartItems = this.cartService.getItems();
    this.itemCount = this.cartService.getItemCount();
    this.totalPrice = this.cartService.getTotalPrice();
  }


  removeItem(item: any): void {
    this.cartService.removeItem(item);
    alert('hhhhhhhhhhhhhhh');
    
    
    this.updateCartData(); 
  }

}

