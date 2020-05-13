import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bg-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];

  @Output() userSetToInactive = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(id: number) {
    this.userSetToInactive.emit(id);
  }

}
