import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'vin-app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(private authService:AuthService){}

  logout(){
    this.authService.logout();
    console.log('U LogOut Frome page')
   }

}
