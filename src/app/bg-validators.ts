import { Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class BGValidators extends Validators {
  static required(control: AbstractControl) {
    return super.required(control) ? { required: 'ველის შეყვანა აუცილებელია' } : undefined;
  }

  static email(control: AbstractControl) {
    return super.email(control) ? { required: 'გთხოვთ შეიყვანოთ სწორი მეილი' } : undefined;
  }

  static forbiddenEmails(control: AbstractControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          return resolve({ emailIsForbidden: 'ასეთი მეილის გამოყენება აკრძალულია' });
        }
        return resolve(null);
      }, 1500);
    });
  }
}
