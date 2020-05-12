import { Injectable } from '@angular/core';

import { Account, AccountStatus } from './account.model';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountsService {
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

  constructor(private loggingService: LoggingService) {}

  addAccount(name: string, status: AccountStatus) {
    this.accounts.push({ name, status });
    this.loggingService.logStatusChange(status);
  }

  updateSatus(id: number, status: AccountStatus) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
