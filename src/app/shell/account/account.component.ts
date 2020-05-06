import { Component } from '@angular/core';

@Component({
  selector: 'bg-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  accountKey = 15;
  accountStatus = 'active';

  constructor() { }

  getAccountStatus() {
    return this.accountStatus;
  }

}
