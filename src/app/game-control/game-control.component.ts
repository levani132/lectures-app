import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'bg-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit, OnDestroy {
  @Output() counterIncreased = new EventEmitter<number>();
  interval;
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.counterIncreased.emit(this.counter++);
    }, 1000);
  }

  onEndGame() {
    clearInterval(this.interval);
  }

}
