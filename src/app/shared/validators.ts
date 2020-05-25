import { Validators as NGValidators, AbstractControl } from '@angular/forms';

export class Validators extends NGValidators {
  static minLength(length) {
    return (control) =>
      super.minLength(length)(control)
        ? { minLength: 'ველის სიგრძე არ შეიძლება იყოს ' + length + '-ზე ნაკლები' }
        : undefined;
  }

  static maxLength(length) {
    return (control) =>
      super.maxLength(length)(control)
        ? { maxLength: 'ველის სიგრძე არ შეიძლება იყოს ' + length + '-ზე მეტი' }
        : undefined;
  }

  static required(control) {
    return super.required(control)
      ? { required: 'ველი აუცილებელია' }
      : undefined;
  }

  static pattern(pattern: string | RegExp, patternDescription?: string) {
    return (control: AbstractControl) => {
      if (super.pattern(pattern)(control)) {
        return {
          minLength: `გთხოვთ დაიცვათ შაბლონი '${patternDescription || pattern.toString()}'`
        };
      }
    };
  }
}
