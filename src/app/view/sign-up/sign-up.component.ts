import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators,FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from '../../services/auth.service';
import { ItemMangService } from '../../services/item-mang.service';
import { Router } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'vin-app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  registrationComplete: boolean = false;
  phoneNumber: string = '';
  otp: string = '';
  enteredOTP: string = '';
  otpSent: boolean = false;

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  phoneNum = new FormControl('', [Validators.required]);
  // enteredOTP = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();
  
  myForm = new FormGroup({
    email: this.email,
    name: this.name,
    password: this.password,
    phoneNum: this.phoneNum,
  });


  constructor(private authservice:AuthService,
    private firestore:Firestore, private router:Router, private auth:ItemMangService){
   
      // this.authservice.getItems().subscribe((res)=>{
      //   console.log('item from firebase as in sssssingup', res) 
      // }, (error)=>{
      //   console.log('error ', error);
      // });
    
      // this.authservice.createItem({email:'', password:'',phone:"1234567890", usernaame:'user_test'}
      // )
      // this.authservice.createItem({email:'Vinittest@gmail.com', password:'test',phone:"1234567890", usernaame:'user_test'})
      
    }

  


    
  // }
  register(email: any, password: any, name: any,phone:any) {
    this.authservice.register(email, password, name,phone)
      .then(() => console.log("User registered successfully!"))
      .catch(error => console.error("Error during registration:", error));
      // this.router.navigate(['/welcome'])
  // }
  // signupForm(email: string, password: string, name: string) {
  //   this.authservice.signup(email, password, name)
  //     .then(() => console.log("User registered successfully!"))
  //     .catch(error => console.error("Error during registration:", error));
  // }

  // updatePassword() {
  //   if (this.newPassword) {
  //     this.authservice
  //       .changePassword(this.userId, this.newPassword)
  //       .then(() => {
  //         alert('Password updated successfully!');
  //         this.newPassword = ''; // Clear input
  //       })
  //       .catch((error) => {
  //         alert('Failed to update password: ' + error.message);
  //       });
  //   } else {
  //     alert('Please enter a new password.');
  //   }
  // }

  // async registerId() {
  //   try {
  //     const userData = { email: this.email, name: this.name, password: this.password };
  //     await this.authservice.registerUser(userData);
  //     alert('Registration successful!');
  //   //  email=this.email
  //   } catch (error) {
  //     alert('Error: ' );
  //   }
  // }

 
  // async verify() {
  //   try {
  //     const isValid = await this.authservice.verifyOTP(this.phoneNumber,this.enteredOTP);

  //     if (isValid) {
  //       this.registrationComplete = true;
  //       alert('OTP verified successfully. Registration complete!');
  //     } else {
  //       alert('Invalid OTP. Please try again.');
  //     }
  //   } catch (error) {
  //     console.error('Error verifying OTP:', error);
  //     alert('Error verifying OTP: ' );
  //   }
  // }

  

}
  


}
