import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompAComponent } from './view/comp-a/comp-a.component';
import { CompBComponent } from './view/comp-b/comp-b.component';
import { NavComponent } from './view/nav/nav.component';
import { CompCComponent } from './view/comp-c/comp-c.component';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { BtnPrDirective } from './directives/btn-pr.directive';
import { TitleCasePipe } from './pipes/title-case.pipe';
import { DateCasepipe } from './pipes/abc.pipe';
import { CompoDComponent } from './view/compo-d/compo-d.component';
import { CompoEComponent } from './view/compo-e/compo-e.component';
import { BtnDngDirective } from './directives/btn-dng.directive';
import { CardDirective } from './directives/card.directive';
import { CartDirective } from './directives/cart.directive';
import { CompoFComponent } from './view/compo-f/compo-f.component';
import { CustomagePipe } from './pipes/customage.pipe';
import { FilterpipePipe } from './pipes/filterpipe.pipe';
import { BtnclickDirective } from './directives/btnclick.directive';
import { DatafilterPipe } from './pipes/datafilter.pipe';
import { BlankpipePipe } from './pipes/blankpipe.pipe';
import { CompoGComponent } from './view/compo-g/compo-g.component';
import { FilterProductPipe } from './pipes/filter-product.pipe';

import { CompoHconComponent } from './view/compo-hcon/compo-hcon.component';
import { ParentComponent } from './view/parent/parent.component';
import { ParentChildComponent } from './view/parent-child/parent-child.component';
import { ReactiveFormComponent } from './view/reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    CompBComponent,
    NavComponent,
    CompCComponent,
    UppercasePipe,
    BtnPrDirective,
    TitleCasePipe,
    DateCasepipe,
    CompoDComponent,
    CompoEComponent,
    BtnDngDirective,
    CardDirective,
    CartDirective,
    CompoFComponent,
    CustomagePipe,
    FilterpipePipe,
    BtnclickDirective,
    DatafilterPipe,
    BlankpipePipe,
    CompoGComponent,
    FilterProductPipe,
    CompoHconComponent,
    ParentComponent,
    ParentChildComponent,
    ReactiveFormComponent
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
