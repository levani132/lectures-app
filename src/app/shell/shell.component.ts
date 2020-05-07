import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  newName: string;
  newInfo: string;
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

  onAddAccount() {
    this.accountElements.push({
      type: 'account',
      name: this.newName,
      info: this.newInfo
    });
  }

  onAddTemplate() {
    this.accountElements.push({
      type: 'template',
      name: this.newName,
      info: this.newInfo
    });
  }

}
