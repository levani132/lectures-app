import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from './validators';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  posts = [];

  ngOnInit() {
    this.initForm();
  }

  onSavePost() {
    console.log(this.form);
    // Send Http request
  }

  onFetchPosts() {
    // Send Http request
  }

  onDeletePost(id) {
    // Send Http request
  }

  get(controlName) {
    return this.form.get(controlName);
  }

  errors(controlName) {
    return this.get(controlName)?.errors ? Object.values(this.get(controlName).errors) : [];
  }

  initForm() {
    this.form = new FormGroup({
      title: new FormControl(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]),
      content: new FormControl(undefined, [Validators.required])
    });
  }
}
