import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'vin-app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private userService:AuthService, private router:Router){}

  // itemStore:any[]=[];

  // itemList=[

  //   {  name:'Mobile', description: 'This is latest version of our Company ,! ', price: 10000  },
  //   {name:'Laptop', description: 'New Varsion + New Octacore Lunched Laptop ', price: 31000  },
  //   {name:'Book', description:'Best Book of The year', price:310}
  // ]


  // addToCart(item:any,i:any){

  //   this.itemStore.push(item);
  //   console.log('Item Added In Cart')

  // }

  // removeItem(item:any){

  //   this.itemList= this.itemList.filter(ItemName => ItemName !== item)
  //   console.log('item Remove From DashBoaed')
    

  // }
  Employee=[];
  users: any[] = []; 
  // employees:any[]=[

    

  //   {id:1, name:'Vikash' , Position:'Sinior Manager', depart:'Salesman', salary:23210},
  //   {id:2, name:'Raushan' , Position:'Junior Manager', depart:'Salesman', salary:12210},
  //   {id:3, name:'Rohit' , Position:'Worker Leader', depart:'Salesman', salary:23219},
  //   {id:4, name:'Virat' , Position:'Head Leadere', depart:'Salesman', salary:15000},
  //   {id:5, name:'Manoj' , Position:'Simple Manager', depart:'Salesman', salary:17000},


  // ]



  ngOnInit(): void {
    // Fetch all users on component initialization
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }
  next(){
    this.router.navigate(['/shoping'])
  }

}
