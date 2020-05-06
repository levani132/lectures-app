import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {
  allowNewAccount = false;
  accountCreationStatus = 'ჯერ არ შექმნილა!';
  accountName = 'სატესტო ანგარიში';
  accountCreated = false;
  accounts = ['სატესტო ანგარიში', 'სატესტო ანგარიში 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewAccount = true;
    }, 2000);
  }

  onCreateAccount() {
    this.accountCreated = true;
    this.accounts.push(this.accountName);
    this.accountCreationStatus = 'ანგარიში შეიქმნა! ახალი ანგარიშის სახელია: ' + this.accountName;
  }

  onUpdateAccountName(event) {
    this.accountName = (event.target as HTMLInputElement).value;
  }

}
