
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'dateToday'
})
export class DateCasepipe implements PipeTransform{
    transform(value: string, gender:string) {
       
        if(gender=='male')
            return "Mr." + value
        
        else
            return "Mrs." + value
     
    }

}