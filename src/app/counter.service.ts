import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'}) 

export class CounterService{
    counter = 0;
    setClass = false;
    
    increaseCounter(){
        this.counter++;
        this.setClass = true;
        setTimeout(() => {
          this.setClass = false;
        }, 2000);
    }

    // addClass(){
    //   this.setClass = true;
    //     setTimeout(() => {
    //       this.setClass = false;
    //     }, 2000);
    // }

}