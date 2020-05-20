import { Validators, FormControl, AbstractControl } from '@angular/forms';

export class CustomValidators extends Validators{
    static required(control: AbstractControl){
        return super.required(control) ? {required: 'ველი აუცილებელია'} : undefined;
    }

    static email(control: AbstractControl) {
        return super.email(control) ? { required: 'გთხოვთ შეიყვანოთ სწორი მეილი' } : undefined;
    }

    static validateEmail(control: AbstractControl) {
        // if(control.value){
        //     const str = control.value.toLowerCase();
        //     if(str.includes('test')){
        //         return {required: 'მეილი არ უნდა შეიცავდეს test-ს'}
        //     }
        // }
        // return undefined;

        return new Promise(resolve => {
            setTimeout(()=>{
                if(control.value){
                    const str = control.value.toLowerCase();
                    if(str.includes('test')){
                        return resolve({required: 'მეილი არ უნდა შეიცავდეს test-ს'});
                    }
                }
                return resolve(undefined);
            }, 1000)
        });
    }
    static validateProjectName(control: AbstractControl) {
        if(control.value){
            const str = control.value.toLowerCase();
            if(str.includes('test')){
                return {required: 'პროექტის სახელი არ უნდა შეიცავდეს test-ს'}
            }
        }
        return undefined;
    }


}