import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'bg-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usrServ: UserService, private count: CounterService) {
    this.users = usrServ.activeUsers;
   }

  ngOnInit(): void {
  }

  changeStatus(id: number) {
    this.usrServ.onSetToInactive(id);
    this.count.increaseCounter();
    // this.count.addClass();
  }

}
