import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = new EventEmitter<number>();
  evenElements = [];
  oddElements = [];

  onCounterIncreased(num: number) {
    if (num % 2) {
      this.oddElements.push(num);
    } else {
      this.evenElements.push(num);
    }
  }
}
