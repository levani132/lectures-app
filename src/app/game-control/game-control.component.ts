import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bg-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  num = 0;
  interval;
  alreadyCounting = false;

  @Output() numIncrease = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  startGame(){
    if (!this.alreadyCounting) {
      this.alreadyCounting = true;
      this.interval = setInterval(() => {
        this.numIncrease.emit(++this.num);
      }, 1000 );
    }
  }

  endGame(){
    clearInterval(this.interval);
    this.alreadyCounting = false;
  }

}
