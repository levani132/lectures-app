import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bg-account-element',
  templateUrl: './account-element.component.html',
  styleUrls: ['./account-element.component.scss']
})
export class AccountElementComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('accountElement') element: {
    type: string,
    name: string,
    info: string
  };

  constructor() { }

  ngOnInit(): void {
  }

}
