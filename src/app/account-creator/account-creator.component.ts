import { Component, OnInit } from '@angular/core';

import { AccountsService } from '../accounts.service';

@Component({
  selector: 'bg-account-creator',
  templateUrl: './account-creator.component.html',
  styleUrls: ['./account-creator.component.scss']
})
export class AccountCreatorComponent implements OnInit {
  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  onCreateAccount(name, status) {
    this.accountsService.addAccount(name, status);
  }

}
