import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Account, AccountStatus } from '../account.model';

@Component({
  selector: 'bg-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  @Input() account: Account;
  @Input() id: number;

  @Output() statusChanged = new EventEmitter<{ id: number, status: AccountStatus }>();

  constructor() { }

  ngOnInit(): void {
  }

  onSetTo(status) {
    this.statusChanged.emit({ id: this.id, status });
    console.log('სერვერის სტატუსი შეიცვალა და გახდა:', status);
  }

}
