import { Component } from '@angular/core';

@Component({
  selector: 'bg-error-alert',
  template: '<p>ამ კომპონენტში მოხდა ერორი</p>',
  styles: [`
    p {
      background-color: lightpink;
      border: 1px solid red;
      padding: 10px;
      margin-bottom: 10px;
    }
  `]
})
export class ErrorAlertComponent {}
