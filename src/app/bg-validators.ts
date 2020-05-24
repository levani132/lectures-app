import { Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class BGValidators extends Validators {
    static required(control: AbstractControl) {
        return super.required(control) ? { required: 'შეავსეთ ველი' } : null;
    }

    static email(control: AbstractControl) {
        return super.email(control) ? { required: 'შეიყვანეთ სწორი მეილი' } : null;
    }

    static forbiddenName(control: AbstractControl) {
        return control.value && control.value.toLowerCase() === 'test' ? { forbidden: 'შეიყვანეთ სხვა სახელი' } : null;
    }

    static forbiddenEmail(control: AbstractControl): Promise<any> | Observable<any> {
        const promise = new Promise(
            (resolve, reject) => {
                setInterval(() => {
                    if (control.value === 'test@test.com') {
                        return resolve({ forbiddenEmail: 'შეიყვანეთ სხვა მეილი' });
                    } else {
                        return resolve(null);
                    }
                }, 3000)
            });

        return promise;
    }
}