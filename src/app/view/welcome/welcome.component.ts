import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'vin-app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

 constructor(private auth:AuthService,private router:Router){}


 logout(){
  this.auth.logout();
  console.log('U LogOut Frome page')
 }

}
