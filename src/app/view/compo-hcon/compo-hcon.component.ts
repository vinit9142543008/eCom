import { Component } from '@angular/core';
import { BehaviorSubject, count } from 'rxjs';


@Component({
  selector: 'vin-app-compo-hcon',
  templateUrl: './compo-hcon.component.html',
  styleUrl: './compo-hcon.component.css'
})
export class CompoHconComponent {

  valueA:string='this is our item Plate';
  // datavalue:string[]=[];
  dataB:{[key:string]:number}={}
  valA:any=[];
  valB:any=[];
  name:string='vinit kumar'

  obj = {
    val:(data:string)=> data,
    getAlphabetCount:()=>{
      this.obj.val
    },
    reverseString:()=>{
    //  return this.obj.val(this.obj.val('tst')).replace(/ /g,'').split('').reverse().join('')
    }
  }

  constructor(){
    // this.dataCon(this.value,)
    // console.log('vvvvvvvvvvvvvv', this.obj.val('test'))
    // this.dataVal()
   
   this.wordCount(this.valueA)
  this.latterCount(this.valueA)
 
  }


  // dataCon(name:any){
  //   console.log('vinitttttt', name)
  //   console.log('Ram is A God')
  // }
  // ngOnInit(): void {
  //  console.log('rohannnnnnnn')
    
  // }
  // dataVal(){
  //   console.log('Aryan','rohittttttttt')
  //   alert('Hey vinit')

// }

wordCount(data:any){

  let arrStr=data.toLowerCase().replace(/''/g,'').split('')
  for(let latter of arrStr){
    if(this.dataB[latter]){
      this.dataB[latter]++;
    }
    else{
      this.dataB[latter]=1;
    }
  }
 
}
objKey(val:any){
  return Object.keys(val)
}

latterCount(data:string){
 
  let arr=data.toLowerCase().replace(/ /g,'');
  let arr2=arr.split('');
  // let valA:any=[];
  // let valB:any=[];
  arr2.forEach((letter:string)=>{
  
    if(!this.valA.includes(letter)){
    this.valA.push(letter);
    this.valB.push({val:letter, count:0})
    }
   if( this.valA.includes(letter)){
    this.valB.forEach((item:any)=> {
      if( this.valA.includes(item.val)){
        if(item.val===letter){
          item.count = item.count +1;
        }
      }
    })
   }
  
  })
  let iteration =  this.valB.flatMap((item:any)=> item.val + '----> '+ item.count );
    console.log(iteration.toString());
 
}



}
