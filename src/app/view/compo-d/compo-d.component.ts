import { Component } from '@angular/core';

@Component({
  selector: 'vin-app-compo-d',
  templateUrl: './compo-d.component.html',
  styleUrl: './compo-d.component.css'
})
export class CompoDComponent {

  value:string='the quick brown fox jumps over the lazy dog';

   dataA:string='YAY'
  
  constructor(){
    // this.findStringCount(this.value);
    this.findWord(this.dataA)
    // console.log('aaaaaaa',this.value)
  
   
  }

  ngOnInit(): void {
    console.log('test constructor')
    // this.dataVal();
    
  //  send karna hai kuch to parameneter ke through kuch bhi bhej sakte hain
  //  function call with data sending
   }



  // recieve karna hai kuch to argument ke through recieve kar skte hain
  dataVal(data:any,nama:any){// execution of function
    console.log('this is itembar', data,nama);
    
  }

  findStringCount(string:string){
    let str = string.toLowerCase().replace(/ /g, '');
    let strArr = str.split('');
    let result:any = [];
    let resultCount:any = [];
    strArr.forEach((letter:string)=>{
      if(!result.includes(letter)){
        result.push(letter);
        resultCount.push({letter:letter, count:0})
      }
      if(result.includes(letter)){
        resultCount.forEach((item:any)=>{
          if(result.includes(item.letter)){
            if(item.letter === letter){
            item.count = item.count + 1 ;
            }
          }
        })
      }
    });
    // let iteration = resultCount.map((item:any)=> item.letter + '----> '+ item.count );
    // console.log(iteration.toString());

  }

  findWord(name:string){
    let value = name.toLowerCase().split('').reverse().join('');
    console.log(value, name);
    if(name.toLowerCase()===value){
    console.log('true')
    }
    else{
      console.log('false')
    }
  }
  
  identifyAlphabets(data:any){
   
  }
  
}