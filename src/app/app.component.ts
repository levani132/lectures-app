import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from './validators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  posts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.initForm();
  }

  onSavePost() {
    this.http
      .post('https://bog-angular-course-api.herokuapp.com/lectures-api/posts', this.form.value)
      .subscribe(response => {
        console.log(response);
      });
    // Send Http request
  }

  onFetchPosts() {
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
