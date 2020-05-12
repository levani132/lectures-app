import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Account } from '../account.model';

@Component({
  selector: 'bg-account-creator',
  templateUrl: './account-creator.component.html',
  styleUrls: ['./account-creator.component.scss']
})
export class AccountCreatorComponent implements OnInit {
  @Output() accountCreated = new EventEmitter<Account>();

  constructor() { }

  ngOnInit(): void {
  }

  onCreateAccount(name, status) {
    this.accountCreated.emit({ name, status });
    console.log('სერვერის სტატუსი შეიცვალა და გახდა:', status);
  }

}
