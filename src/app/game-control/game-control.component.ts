import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bg-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output() count = new EventEmitter<number>();
  interval: any;
  lastEmittedNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    this.interval = setInterval(() => this.count.emit(this.lastEmittedNumber++), 1000);
  }

  onEnd() {
    clearInterval(this.interval);
  }

}
