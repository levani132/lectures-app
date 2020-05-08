import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  username=''
  hidden = true
  // numClick = 0
  count = []
  constructor() {
  }

  ngOnInit():void {

  }
  onClick(){
    this.hidden = !this.hidden;
    // this.numClick += 1;
    this.count.push(this.count.length + 1);
  }
}
