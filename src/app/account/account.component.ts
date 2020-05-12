import { Component, OnInit, Input } from '@angular/core';

import { Account } from '../account.model';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'bg-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  @Input() account: Account;
  @Input() id: number;

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  onSetTo(status) {
    this.accountsService.updateSatus(this.id, status);
  }

}
