import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'bg-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {
users: string[];

  constructor(private usrServ: UserService, private counter: CounterService) {
    this.users = usrServ.inactiveUsers;
  }

  ngOnInit(): void {
  }

  changeStatus(id: number) {
    this.usrServ.onSetToActive(id);
    this.counter.increaseCounter();
    // this.counter.addClass();
  }

}
