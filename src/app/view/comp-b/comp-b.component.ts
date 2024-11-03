import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'vin-app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.css'
})
export class CompBComponent implements OnInit {
  name = 'triPuraRi Singh';
 arrValue:any[]=[];
  currentDate:Date=new Date();
  @Output() valA= new EventEmitter();
  @Input() val=""
   selectGender='';

   massage(){
    
   }

  empData:any=[{
    no:1,
    name:"Rahul kumar",
    age:25,
    gender:'male',
    salary:'$2200'  },
  
    {
      no:2,
      name:"Rohit Kumar",
      age:27,
      gender:'male',
      salary:'$2300' } ,
      {  no:3,
        name:"jypti kumari",
    age:23,
    gender:'female',
    salary:'$1500' 
      },
  {
    no:4,
    name:"gili kumari",
    age:25,
    gender:'female',
    salary:'$1200' 
  }
  ]
 
 

  ngOnInit(): void {
    
  }
}
