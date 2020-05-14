import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CounterService {
    counter = 0;
    showCounter = false;
    // ჯობდა მთვლელის გაზრდა და გამოჩენა ცალ-ცალკე კლასები ყოფილიყო, მაგრამ ვეღარ ვასწრებ
    increaseCounter() {
        this.counter++;
        this.showCounter = true;
        setTimeout (() => { this.showCounter = false; }, 2000);
    }
}
