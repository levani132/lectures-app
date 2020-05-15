import { Validators, AbstractControl } from '@angular/forms';

export class BGValidators extends Validators {
  static required(control: AbstractControl) {
    return super.required(control) ? { required: 'ველის შეყვანა აუცილებელია' } : undefined;
  }

  static email(control: AbstractControl) {
    return super.email(control) ? { required: 'გთხოვთ შეიყვანოთ სწორი მეილი' } : undefined;
  }
}
