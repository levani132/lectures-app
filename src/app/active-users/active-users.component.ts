import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user-service.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'bg-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {

  users: string[];

  constructor(private userService: UserService, private counterService: CounterService) { }

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }

  changeStatus(id: number) {
    this.userService.onSetToInactive(id);
    this.counterService.increaseCounter();
  }

}
