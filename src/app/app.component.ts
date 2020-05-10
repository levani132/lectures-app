import { Component } from '@angular/core';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lectures-app';

  oddComponents = [];
  evenComponents = [];

  addComponent(num: number) {

    if (num % 2 === 0) {
      this.evenComponents.push(num);
      console.log('even ' + num);
    }
    else {
      this.oddComponents.push(num);
      console.log('odd ' + num);
    }
  }
}
