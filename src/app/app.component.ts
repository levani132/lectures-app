import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  genders = ['ქალი', 'კაცი', 'სხვა'];
  signupForm: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  initForm() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(undefined, Validators.required),
        email: new FormControl(undefined, [Validators.required, Validators.email])
      }),
      gender: new FormControl('კაცი')
    });
  }
}
