import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BGValidators } from './bg-validators';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lectures-app';
  formGroup: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }

  errors(controlName) {
    return this.get(controlName).errors && Object.values(this.get(controlName).errors);
  }

  get(controlName) {
    return this.formGroup.get(controlName);
  }

  initForm() {
    this.formGroup = new FormGroup({
      projectName: new FormControl(undefined, [BGValidators.required, BGValidators.projectNameValidator]),
      email: new FormControl(undefined, [BGValidators.required, BGValidators.email, BGValidators.emailValidator]),
      projectStatus: new FormControl(undefined)
    });
  }
}
