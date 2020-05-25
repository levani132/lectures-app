import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { PostsService } from '../posts.service';
import { Validators } from 'src/app/shared/validators';

@Component({
  selector: 'bg-bpm001',
  templateUrl: './bpm001.component.html',
  styleUrls: ['./bpm001.component.scss']
})
export class Bpm001Component implements OnInit, OnDestroy {
  form: FormGroup;
  error;
  errorSubscription: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.initForm();

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
