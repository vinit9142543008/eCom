import { Component } from '@angular/core';

@Component({
  selector: 'vin-app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

 myNewForm= new formNew('','',['New Delhi','Noida East','Noida West','South Delhi'],
  [],null,
  ''
);
myNo= new numbera(null)

  submit(a:any){
  console.log(a)
  }
  resetForm(data:any){
    data.reset()
    console.log('Your Form Hasbeen Reset')
  }

stateNmae= new stateSelect(['Bihar','Punjab', 'Uttar Pradesh', 'Hariyana',],[])
  

 

}

export class formNew{
  constructor(public name:'',public email:'',public city:string[],
     public citySelect:string[],
      public mobile:null, public disc:string ){}
}

export class stateSelect{
  constructor(public state:string[],public stateval:string[] ){}
}
export class numbera{
  constructor(public mobileNo: string |null){}
}