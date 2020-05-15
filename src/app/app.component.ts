import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  defaultQuestion = 'pet';
  answer;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
