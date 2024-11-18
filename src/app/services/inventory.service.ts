import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private firestore: AngularFirestore) { }




  addProduct(product: any) {
    return this.firestore.collection('products').add(product);
  }

  
  addInventory(inventory: any) {
    return this.firestore.collection('inventory').add(inventory);
  }

  
  getProducts(): Observable<any[]> {
    return this.firestore.collection('products').valueChanges();
  }

 
  getInventoryByProductId(productId: string): Observable<any> {
    return this.firestore.collection('inventory', ref =>
      ref.where('product_id', '==', productId)
    ).valueChanges();
  }

  
  updateInventory(inventoryId: string, quantity: number) {
    return this.firestore.collection('inventory').doc(inventoryId).update({
      quantity,
      last_updated: new Date()
    });
  }



}
