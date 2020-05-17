import { Component } from '@angular/core';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numbers = [];

  onNumberAdded(eventNum: number) {
    this.numbers.push(eventNum);
  }
}
