import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './view/sign-up/sign-up.component';
import { LoginComponent } from './view/login/login.component';
import { WelcomeComponent } from './view/welcome/welcome.component';
import { MenuComponent } from './view/menu/menu.component';
import { LogoutComponent } from './view/logout/logout.component';
import { ShopingComponent } from './view/shoping/shoping.component';
import { CartComponent } from './view/cart/cart.component';
import { UsersComponent } from './view/users/users.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
{path:'signup', component:SignUpComponent},

// {path:'', redirectTo:'/welcom', pathMatch:"full"},
{path:'login', component:LoginComponent},
{path:'welcome', component:WelcomeComponent, canActivate:[AuthGuard]},
{ path: '', redirectTo: '/login', pathMatch: 'full' }, 
{path:'menu', component:MenuComponent, canActivate:[AuthGuard]},
{path:'logout',component:LogoutComponent, canActivate:[AuthGuard]},
{path:'shoping', component:ShopingComponent, canActivate:[AuthGuard]},
{path:'cart', component:CartComponent, canActivate:[AuthGuard]},
{path:'users', component:UsersComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
