import { Validators, FormControl } from '@angular/forms';

export class BGValidators extends Validators {
  static projectNameValidator(control: FormControl) {
    if (control.value && control.value.toLowerCase() === 'test') {
      return { projectName: 'პროექტის სახელი არ შეიძლება იყოს test' };
    }
  }

  static emailValidator(control: FormControl) {
    if (control.value && control.value.toLowerCase() === 'test@test.com') {
      return { projectName: 'პროექტის სახელი არ შეიძლება იყოს test@test.com' };
    }
  }

  static required(control: FormControl) {
    if (super.required(control)) {
      return { required: 'ველი აუცილებელია' };
    }
  }

  static email(control: FormControl) {
    if (super.email(control)) {
      return { required: 'არასწორი მეილის ფორმატი' };
    }
  }
}
