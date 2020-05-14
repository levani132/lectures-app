import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user-service.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'bg-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {

  users: string[];

  constructor(private userService: UserService, private counterService: CounterService) { }

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }

  changeStatus(id: number) {
    this.userService.onSetToActive(id);
    this.counterService.increaseCounter();
  }

}
