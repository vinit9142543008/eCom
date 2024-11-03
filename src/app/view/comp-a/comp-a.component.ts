import { Component } from '@angular/core';

@Component({
  selector: 'vin-app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.css'
})
export class CompAComponent {

  myname="vinit"
  // empData:any=[{
  //   no:1,
  //   name:"Rahul kumar",
  //   age:25,
  //   gender:'male',
  //   salary:'$2200'  },
  
  //   {
  //     no:2,
  //     name:"Rohit Kumar",
  //     age:27,
  //     gender:'male',
  //     salary:'$2300' } ,
  //     {  no:3,
  //       name:"jypti kumari",
  //   age:23,
  //   gender:'female',
  //   salary:'$1500' 
  //     },
  // {
  //   no:4,
  //   name:"gili kumari",
  //   age:25,
  //   gender:'female',
  //   salary:'$1200' 
  // }
  // ]
  vinitt(event:any){
    this.myname=event
  }
}
