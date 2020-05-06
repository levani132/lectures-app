import { Component } from '@angular/core';

@Component({
  selector: 'bg-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  accountKey: number = 15;
  accountStatus: string = 'active';

  constructor() { }

  getAccountStatus() {
    return this.accountStatus;
  }

}
