import { Account, AccountStatus } from './account.model';

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

  addAccount(name: string, status: AccountStatus) {
    this.accounts.push({ name, status });
  }

  updateSatus(id: number, status: AccountStatus) {
    this.accounts[id].status = status;
  }
}
