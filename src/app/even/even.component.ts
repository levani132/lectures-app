import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bg-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss']
})
export class EvenComponent implements OnInit {
  @Input() num;

  constructor() { }

  ngOnInit(): void {
  }

}
