import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'reverse'
})

export class ReversePipe implements PipeTransform{
    transform(value: string){
        let result = "";
        for (let index = value.length - 1; index >= 0; index--) {
            result+= value.charAt(index);    
        }
        return result;
    }
}