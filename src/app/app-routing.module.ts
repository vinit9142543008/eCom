import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompAComponent } from './view/comp-a/comp-a.component';
import { CompCComponent } from './view/comp-c/comp-c.component';
import { CompBComponent } from './view/comp-b/comp-b.component';
import { CompoDComponent } from './view/compo-d/compo-d.component';
import { CompoEComponent } from './view/compo-e/compo-e.component';
import { CompoFComponent } from './view/compo-f/compo-f.component';
import { CompoGComponent } from './view/compo-g/compo-g.component';
import { CompoHconComponent } from './view/compo-hcon/compo-hcon.component';
import { ParentComponent } from './view/parent/parent.component';
import { ParentChildComponent } from './view/parent-child/parent-child.component';
import { ReactiveFormComponent } from './view/reactive-form/reactive-form.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/a'},
  {path:'a', component:CompAComponent},
  {path:'b', component:CompBComponent},
  {path:'c', component:CompCComponent},
  {path:'d', component:CompoDComponent},
  {path:'e', component:CompoEComponent},
  {path:'cart-detail', component:CompoFComponent},
  {path:'G', component:CompoGComponent},
  {path:'H', component:CompoHconComponent},
  {path:'p',component:ParentComponent},
  {path:'pc', component:ParentChildComponent},
  {path:'form',component:ReactiveFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
