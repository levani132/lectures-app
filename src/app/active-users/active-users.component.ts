import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { usersService } from '../users.service';
import { countsService } from '../counts.service';

@Component({
  selector: 'bg-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss'],
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];

  constructor(private usersService: usersService, private counterService: countsService) { }

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
  }

  changeStatus(id: number) {
    this.usersService.onSetToInactive(id);
    this.counterService.onChangeStatus();
  }

}
