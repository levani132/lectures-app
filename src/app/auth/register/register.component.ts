import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Validators } from 'src/app/shared/validators';

@Component({
  selector: 'bg-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  error;

  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  onRegister() {
    console.log(this.form.value);
  }

  get(controlName) {
    return this.form.get(controlName);
  }

  errors(controlName) {
    return this.get(controlName)?.errors ? Object.values(this.get(controlName).errors) : [];
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ]),
      username: new FormControl(undefined, [
        Validators.required,
        Validators.pattern(/^\S*$/, 'სფეისების გარეშე'),
        Validators.minLength(2),
        Validators.maxLength(30)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ])
    });
  }

}
