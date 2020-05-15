import { Component } from '@angular/core';
import { CounterService } from './counterService.service';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'lectures-app';

  constructor(public counterService: CounterService) {

  }
}
