import { Injectable } from '@angular/core';

@Injectable()
export class countsService {
    counter: number = 0;
    isActive: boolean = false;

    onChangeStatus(){
        this.counter++;
        this.isActive = true;
        console.log(this.counter);
        setTimeout(()=>{
          this.isActive = false;
          console.log(this.isActive);
        }, 1000);
       
    }
}