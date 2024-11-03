import { Component, Input,OnInit,SimpleChanges } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'vin-app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrl: './parent-child.component.css'
})
export class ParentChildComponent {




countrylist:any=[];
submitValue:Array<{name:string,country:string[]}>= []

chooseCountry=[

  {id:1,name:'INDIA',select:false},
  {id:2,name:'UK',select:false},
  {id:3,name:'Aus',select:false},
  {id:4, name:'USA',select:false}
]
  
 dataNew= new formData(['10th','12th','Graduate'],'')

submit(data:any){
  // this.countrylist=this.chooseCountry.filter(country => country.select==true).map(a=>a.id).join(",").toString();
  // console.log(this.countrylist,'vhvhvhvjhvhgv')
  const formData=this.chooseCountry.filter(value=>value.select).map(ab=>ab.name);
  this.submitValue.push({
    name: data.value.name, 
    country: formData,
  
  });
  data.resetForm();
  this.chooseCountry.forEach(val=>(val.select=false))


}
myNewForm=
new myForm('','','',['Bihar',"Punjab",'Uttar Pradesh','Hariyana','Madhya Pradesh'],[],
  false,'');

dataSubmited(a:any){
  console.log(a)
}

 resetForm(value:any){
 value.reset();
 console.log('Form hasbeen Reset')
 }

dataSub(a:any){
  
  console.log(a)
}
  
    }
export class formData{
  constructor( public course:string[],public infoEmp:string){

  }
}
    
export class myForm{
  constructor(public name:string, public email:string,public city:string, 
    public state:string[],public selectState:string[], public blankCheckbox:boolean, 
    public texta:''){
    
  }
}


