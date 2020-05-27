import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bg-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() error: string;
  @Output() closeClick = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
