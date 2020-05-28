import { Validators, FormControl } from '@angular/forms';

export class BGValidators extends Validators {

    static required(control: FormControl) {
        return super.required(control) ? { required: 'გთხოვთ შეავსოთ ველი' } : undefined;
    }

    static email(control: FormControl) {
        return super.email(control) ? { email: 'გთხოვთ მიუთითოთ სწორი მისამართი' } : undefined;
    }

    static testName(control: FormControl) {
        if (control.value && control.value.toLowerCase() === 'test') {
            return { testName: 'ეს სახელი აკრძალულია' };
        }
        return undefined;
    }

    static testEmail(control: FormControl) {
        return new Promise(resolve => {
            setTimeout (() => {
                if (control.value && control.value === 'test@test.com') {
                    return resolve({ testEmail: 'ეს მისამართი აკრძალულია' });
                }
                return resolve(null);
            }, 1000);
        });
    }
}
