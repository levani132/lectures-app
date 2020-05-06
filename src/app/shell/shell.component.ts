import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  username = '';
  showHidden = true;
  clicks = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton() {
    this.showHidden = !this.showHidden;
    this.clicks.push(this.clicks.length + 1);
  }

}
