import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss'],
  styles: [`
    *{
      color:#0a0;
    }
  `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
