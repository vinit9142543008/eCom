import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'vin-app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = new FormControl('', [Validators.required, Validators.email]);
  
  password = new FormControl('', [Validators.required]);
  
 
  myForm = new FormGroup({
    email: this.email,
    
    password: this.password,
   
  });
  matcher = new MyErrorStateMatcher();

constructor(private auth:AuthService,
  private router:Router
){
  
}

login() {
 this.auth.authenticate(this.email.value,this.password.value).subscribe((res)=>{
  res?.map((user:any)=>{
    if(user.email == this.email.value && user.password == this.password.value){
      localStorage.setItem('token', encodeURI(JSON.stringify(user)))
      this.router.navigate(['/welcome'])      
    } else{
      console.log('user not found');
    }
  })
 })
 
}


}
