import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bg-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  interval: any;
  count: number = 0;
  @Output() numIncrease = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onGameStart() {
    this.interval = setInterval(() => {
      this.numIncrease.emit(++this.count);
    }, 1000)
  }

  onGameEnd() {
    clearInterval(this.interval);
  }
}
