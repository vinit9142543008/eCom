import { Component,  EventEmitter,  Input, Output, output, SimpleChanges } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'vin-app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrl: './comp-c.component.css'
})
export class CompCComponent {
//  searchFilter:string="";
//  product=[
//   {  so:1, item:"Book", price:200, disc:'This is latest printed book '},
//   { so:2, item:"phone", price:20000, disc:'This is latest phone'},
//   { so:3, item:"vivo", price:12000, disc:'This is latest vivo phone'},
//   {so:4, item:"Laptop", price:420000, disc:'This is latest version'},
//   {so:5, item:"phonedisk", price:120000, disc:'This is latest phonedisk'}
//  ]

 


//  constructor(){
//   console.log('constructor called')
//  }
//  ngOnChanges(changes:SimpleChanges): void {
//   console.log('ngOnChanges called')
//  }
//  ngOnInit(): void {
//   console.log('ngOnInit called')
  
//  }
constructor(private cartService:CartService){}
states:string[] = ['Bihar'];
userForm: FormGroup = new FormGroup({
  name:new FormControl(''),
  email: new FormControl(''),
  userPassword: new FormControl(''),
  state: new FormControl([],[Validators.required])
}
)
stateList= (['Bihar','Uttar Pradesh','New DElhi']);

sumitt(){
  console.log(this.userForm.value)
}

selectState(event:any,option:any){
  if(event.target.checked){
  this.states.push(option);
  }
  if(!event.target.checked){
   this.states = this.states.filter(item=> item != option)
  }
  this.userForm.patchValue({
    state:this.states
  });
  this.cartService.states = this.states;
}
}
