import { Component } from '@angular/core';

@Component({
  selector: 'bg-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  accountKey = 15;
  accountStatus = 'active';

  constructor() {
    this.accountStatus = Math.random() > 0.5 ? 'active' : 'canceled';
  }

  getAccountStatus() {
    return this.accountStatus;
  }

  getColor() {
    return this.accountStatus === 'active' ? 'green' : 'red';
  }

}
