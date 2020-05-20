import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms'
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lectures-app';
  myGroup: FormGroup;

  ngOnInit(){
    this.initForm();
  }

  onSubmit(){
    console.log(this.myGroup.value);
  }

  errors(controlName: string) {
    return Object.values(this.get(controlName).errors);
  }

  get(controlName: string ): AbstractControl{
    return this.myGroup.get(controlName);
  }

  initForm(){
    this.myGroup = new FormGroup({
      projectName: new FormControl(undefined, [CustomValidators.required, CustomValidators.validateProjectName]),
      // email: new FormControl(undefined, [CustomValidators.required, CustomValidators.email, CustomValidators.validateEmail]),
      email: new FormControl(undefined, [CustomValidators.required, CustomValidators.email], CustomValidators.validateEmail),
      status: new FormControl(undefined, CustomValidators.required)
    })
  }
}
