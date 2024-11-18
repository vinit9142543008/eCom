import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
// import { AuthService } from './services/auth.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
 

// export default interface Product{
//   id:number,
//   pName:string,
//   price:number,
//   desc:string,
//   productCat:string,
//   qty:number,
//   addedIntoCart:boolean
//   img:any
// } 

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice';
  toggleCart:boolean = false;
 
  constructor(public authService:AuthService, public router:Router){ 
    console.log('app compenwet')
 
  }
  
 

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  phoneNum = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

 
  
  
}
