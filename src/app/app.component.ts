import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Validators } from './validators';
import { Post } from './post.model';

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
    this.fetchPosts();
  }

  onSavePost() {
    this.http
      .post<{ id: number }>('https://bog-angular-course-api.herokuapp.com/lectures-api/posts', this.form.value)
      .subscribe(response => {
        console.log(response);
      });
    // Send Http request
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onDeletePost(id) {
    // Send Http request
  }

  private fetchPosts() {
    return this.http.get<Post[]>('https://bog-angular-course-api.herokuapp.com/lectures-api/posts')
      .pipe(
        map((data) => {
          data.forEach(item => {
            item.validated = true;
          });
          return data;
        })
      )
      .subscribe(posts => {
        console.log(posts);
      });
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
