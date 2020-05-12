import { Component } from '@angular/core';

import { Account, AccountStatus } from './account.model';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  accounts: Account[] = [
    {
      name: 'პირველი ანგარიში',
      status: 'active'
    },
    {
      name: 'სატესტო ანგარიში',
      status: 'inactive'
    },
    {
      name: 'უცნობი ანგარიში',
      status: 'unknown'
    }
  ];

  onAccountCreated(account: Account) {
    this.accounts.push(account);
  }

  onAccountStatusChanged(statusChangeEvent: { id: number, status: AccountStatus }) {
    this.accounts[statusChangeEvent.id].status = statusChangeEvent.status;
  }
}
