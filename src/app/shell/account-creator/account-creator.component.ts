import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bg-account-creator',
  templateUrl: './account-creator.component.html',
  styleUrls: ['./account-creator.component.scss']
})
export class AccountCreatorComponent implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output('accountAdded') accountCreated = new EventEmitter<{ newName: string, newInfo: string }>();
  // tslint:disable-next-line:no-output-rename
  @Output('templateAdded') templateCreated = new EventEmitter<{ newName: string, newInfo: string }>();
  // newName: string;
  newInfo: string;

  constructor() { }

  ngOnInit(): void {
  }

  onAddAccount(nameInput: HTMLInputElement) {
    this.accountCreated.emit({
      newName: nameInput.value,
      newInfo: this.newInfo
    });
  }

  onAddTemplate(nameInput: HTMLInputElement) {
    this.templateCreated.emit({
      newName: nameInput.value,
      newInfo: this.newInfo
    });
  }

}
