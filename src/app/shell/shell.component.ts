import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  accountElements = [
    {
      type: 'account',
      name: 'სატესტო ანგარიში',
      info: 'დამატებითი ინფორმაცია'
    },
    {
      type: 'template',
      name: 'სატესტო ანგარიში',
      info: 'დამატებითი ინფორმაცია'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAccountAdded(accountData: { newName: string, newInfo: string }) {
    this.accountElements.push({
      type: 'account',
      name: accountData.newName,
      info: accountData.newInfo
    });
  }

  onTemplateAdded(accountData: { newName: string, newInfo: string }) {
    this.accountElements.push({
      type: 'template',
      name: accountData.newName,
      info: accountData.newInfo
    });
  }

  onChangeFirst() {
    this.accountElements[0].name = 'ახალი ანგარიშის სახელი';
  }

  onDestroySecond() {
    this.accountElements.pop();
  }

}
