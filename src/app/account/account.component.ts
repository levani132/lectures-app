import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Account, AccountStatus } from '../account.model';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'bg-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: Account;
  @Input() id: number;

  @Output() statusChanged = new EventEmitter<{ id: number, status: AccountStatus }>();

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
  }

  onSetTo(status) {
    this.statusChanged.emit({ id: this.id, status });
    this.loggingService.logStatusChange(status);
  }

}
