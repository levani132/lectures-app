import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

import { Validators } from './validators';
import { PostsService } from './posts.service';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  form: FormGroup;
  posts = [];
  isLoading = false;
  error;
  errorSubscription: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.initForm();
    this.fetchPosts();

    this.errorSubscription = this.postsService.error.subscribe(err => {
      this.error = err;
    });
  }

  ngOnDestroy() {
    this.errorSubscription.unsubscribe();
  }

  onSavePost() {
    this.postsService.createPost(this.form.value.title, this.form.value.content);
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  fetchPosts() {
    // Fetch posts from posts service and also use this.loader operator
  }

  onDeletePost(id) {
    this.postsService.deletePost(id).pipe(obs => this.loader(obs)).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id);
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
