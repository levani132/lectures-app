import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  counter = 0;
  showCounter = false;

  count() {
    this.counter++;
    this.showCounter = true;
    setTimeout(() => this.showCounter = false, 2000);
  }
}
