import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-success-alert',
  templateUrl: './success-alert.component.html',
  styles: [`
            p {color:green}
          `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
