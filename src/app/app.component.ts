import { Component, OnInit } from '@angular/core';

import { Account } from './account.model';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}
