import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string) {
    return value.split('').reverse().join('');
    }
}

