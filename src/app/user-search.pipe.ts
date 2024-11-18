import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(value: any[], args: string): any {
    
    if(!value || !args){

      return value;
    }
    args= args.toLowerCase();
    // return value.filter((val:any)=>Object.values(val).some(args)  )

  }

}
