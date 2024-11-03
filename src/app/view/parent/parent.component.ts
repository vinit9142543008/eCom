import { Component } from '@angular/core';

@Component({
  selector: 'vin-app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {


dataCheck:any='My Name is VINIT KUMAR Singh';

  valueUp:string='';
  submitUp:string='';
  dataUpdate(){
    // this.dataCheck='My Name is VINIT KUMAR SINGH RAJPUT'
  }
  updateValue(){
    // this.submitUp=this.valueUp
  }
// newForm= new NewClass('','',2)
// constructor(){}
// newUpdate(val:any){
//  console.log(val)
// }
// name:string | undefined;
// email:string | undefined;
// age:number|undefined;
// gender:string|undefined;
// ffav:string[]=['mango','banana','apple'];

newData= new newvinit('','',0, ['male', 'female'],
   ['mango', 'banana', 'apple']);

   dataName:string[]=['Rohit','Mohit','Sohan'];
   select:string='';

   nameVal=
    {
    emp:'',
    age:null,
    qualification:'',
    email:''
   };

  

constructor(){}

submit(a:any){
  console.log(a)
}
onsubmit(abc:any){
  console.log(abc)
}

}
export class NewClass{

  constructor(public fName:string,public lName:string,public age:number){}
}
export class newvinit{
  constructor( public name:string ,
    public email:string, 
    public age:0,
    public gender:string[],
    public ffav:string[]
  
    ){}
}
