import { Component } from '@angular/core';

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  onlyOdd = false;
  numbers = [1, 2, 3, 4, 5];
  odds = [1, 3, 5];
  evens = [2, 4];
  value = 10;
}
