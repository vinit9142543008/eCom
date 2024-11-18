import { Component } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'vin-app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {


  products: any[] = [];
  product = {
    name: 'Laptop',
    description: 'High-end gaming laptop',
    price: 1500,
    image_url: 'https://example.com/laptop.jpg'
  };

  inventory = {
    product_id: '',
    quantity: 50,
    last_updated: new Date()
  };

  // constructor(private inventoryService: InventoryService) {}

//  
 

// }
}