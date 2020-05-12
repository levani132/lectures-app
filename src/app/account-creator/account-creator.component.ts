import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'bg-account-creator',
  templateUrl: './account-creator.component.html',
  styleUrls: ['./account-creator.component.scss'],
  providers: [LoggingService, AccountsService]
})
export class AccountCreatorComponent implements OnInit {
  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  onCreateAccount(name, status) {
    this.accountsService.addAccount(name, status);
    this.loggingService.logStatusChange(status);
  }

}
