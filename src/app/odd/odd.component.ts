import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bg-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnInit {
  @Input() num;

  constructor() { }

  ngOnInit(): void {
  }

}
