import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'sort', 
    pure: false
})

export class SortPipe implements PipeTransform{
    transform(arr:any[]){
        arr.sort((el1, el2)=> {
            if(el1.owner < el2.owner){
                return -1;
            }
            if (el1.owner > el2.owner){
                return 1;
            }
            return 0;
        });
        return arr;
    }
}