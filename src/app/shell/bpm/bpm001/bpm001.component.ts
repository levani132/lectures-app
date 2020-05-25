import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { PostsService } from '../posts.service';
import { Validators } from 'src/app/shared/validators';

@Component({
  selector: 'bg-bpm001',
  templateUrl: './bpm001.component.html',
  styleUrls: ['./bpm001.component.scss']
})
export class Bpm001Component implements OnInit {
  form: FormGroup;
  success;
  error;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.initForm();
  }

  onSavePost() {
    if (this.form.invalid) {
      return;
    }
    this.postsService.createPost(this.form.value.title, this.form.value.content)
      .subscribe(() => {
        this.success = 'პოსტი წარმატებით დაემატა';
        this.form.reset();
      }, err => {
        this.error = err.error;
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
