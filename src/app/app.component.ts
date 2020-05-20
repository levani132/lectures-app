import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Validators } from './validators';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  posts = [];
  isLoading = false;
  error;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.initForm();
    this.fetchPosts();
  }

  onSavePost() {
    this.postsService.createPost(this.form.value.title, this.form.value.content);
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.postsService.fetchPosts().pipe(obs => this.loader(obs)).subscribe(posts => {
      this.posts = posts;
    });
  }

  onDeletePost(id) {
    this.postsService.deletePost().pipe(obs => this.loader(obs)).subscribe(() => {
      this.posts = [];
    }, error => {
      this.error = error.error;
      console.log(error);
    });
  }

  loader<T>(observable: Observable<T>): Observable<T> {
    this.isLoading = true;
    return new Observable<T>(observer => {
      observable.subscribe(data => {
        this.isLoading = false;
        observer.next(data);
      }, error => {
        this.isLoading = false;
        observer.error(error);
      });
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
