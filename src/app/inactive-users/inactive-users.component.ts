import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bg-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];

  @Output() userSetToActive = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(id: number) {
    this.userSetToActive.emit(id);
  }

}
