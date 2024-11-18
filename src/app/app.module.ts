import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NavRouterComponent } from './nav-router/nav-router.component';
import { SignUpComponent } from './view/sign-up/sign-up.component';

import { AuthService } from './services/auth.service';
import { environment } from '../environments/environment.prod';
import { LoginComponent } from './view/login/login.component';
import { MatMenuModule } from '@angular/material/menu';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { WelcomeComponent } from './view/welcome/welcome.component';
import { MenuComponent } from './view/menu/menu.component';
import { LogoutComponent } from './view/logout/logout.component';
import { UserSearchPipe } from './user-search.pipe';
import { ShopingComponent } from './view/shoping/shoping.component';
import { CartComponent } from './view/cart/cart.component';
import { UsersComponent } from './view/users/users.component';
import { NavComponent } from './view/nav/nav.component';

@NgModule({
  
  declarations: [
    AppComponent,
    NavRouterComponent,
    SignUpComponent,

 LoginComponent,
   WelcomeComponent,
   MenuComponent,
   LogoutComponent,
   UserSearchPipe,
   ShopingComponent,
   CartComponent,
   UsersComponent,
   NavComponent

  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    AppRoutingModule,    
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule
  ],
  providers: [
    AuthService,
    // provideZoneChangeDetection({ eventCoalescing: true }),
    provideFirebaseApp(() => initializeApp(
      {
      // apiKey: "YOUR_API_KEY",
      // authDomain: "YOUR_AUTH_DOMAIN",
      // projectId: "YOUR_PROJECT_ID",
      // storageBucket: "YOUR_STORAGE_BUCKET",
      // messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      // appId: "YOUR_APP_ID"

      apiKey: "AIzaSyDRkwJR8OhyxowHTRsEfwEu0-fwzHPG6j0",
  authDomain: "vinit3008demo.firebaseapp.com",
  databaseURL: "https://vinit3008demo-default-rtdb.firebaseio.com",
  projectId: "vinit3008demo",
  storageBucket: "vinit3008demo.firebasestorage.app",
  messagingSenderId: "188150862330",
  appId: "1:188150862330:web:f09a4bd53e9eaaf96c1443",
  measurementId: "G-2ZNBK1SQ4Q"
    }
  )),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
