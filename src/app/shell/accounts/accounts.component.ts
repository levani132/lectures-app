import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {
  allowNewAccount: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewAccount = true;
    }, 2000);
  }

}
