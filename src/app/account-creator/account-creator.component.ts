import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Account } from '../account.model';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'bg-account-creator',
  templateUrl: './account-creator.component.html',
  styleUrls: ['./account-creator.component.scss'],
  providers: [LoggingService]
})
export class AccountCreatorComponent implements OnInit {
  @Output() accountCreated = new EventEmitter<Account>();

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
  }

  onCreateAccount(name, status) {
    this.accountCreated.emit({ name, status });
    this.loggingService.logStatusChange(status);
  }

}
