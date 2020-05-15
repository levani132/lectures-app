import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  genders = ['ქალი', 'კაცი', 'სხვა'];
  signupForm: FormGroup;
}
