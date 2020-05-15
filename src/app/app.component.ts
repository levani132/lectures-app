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
  genders = ['ქალი', 'კაცი'];
  user: any = {};
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    // this.user.username = form.value.userData.username;
    // this.user.email = form.value.userData.email;
    // this.user.secret = form.value.secret;
    // this.user.answer = form.value.answer;
    // this.user.gender = form.value.gender;
    this.user = form.value;
    form.reset({
      userData: { username: 'Levani' }
    });
  }
}
