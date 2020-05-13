import { Component } from '@angular/core';
import { usersService } from './users.service';
import { countsService } from './counts.service';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [usersService, countsService]
})
export class AppComponent {
}
