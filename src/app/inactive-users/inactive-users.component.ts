import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { usersService } from '../users.service';
import { countsService } from '../counts.service';

@Component({
  selector: 'bg-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];

  constructor(private usersService: usersService, private counterService: countsService) { }

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
  }

  changeStatus(id: number) {
    this.usersService.onSetToActive(id);
    this.counterService.onChangeStatus();
  }

}
