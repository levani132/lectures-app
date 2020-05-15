import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormArray } from '@angular/forms';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  genders = ['ქალი', 'კაცი', 'სხვა'];
  signupForm: FormGroup;
  forbiddenNames = ['მარიამი', 'დიმიტრი'];

  ngOnInit() {
    this.initForm();
  }

  onAddHobby() {
    (this.get('hobbies') as FormArray).push(new FormControl(undefined, Validators.required));
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  getHobbiesControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNamesValidator(control: FormControl): { [key: string]: any } {
    if (this.forbiddenNames.includes(control.value)) {
      return { nameIsForbidden: true };
    }
  }

  get(controlName: string | (string | number)[]): AbstractControl {
    return this.signupForm.get(controlName);
  }

  initForm() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(undefined, [Validators.required, this.forbiddenNamesValidator.bind(this)]),
        email: new FormControl(undefined, [Validators.required, Validators.email])
      }),
      gender: new FormControl('კაცი'),
      hobbies: new FormArray([])
    });
  }
}
