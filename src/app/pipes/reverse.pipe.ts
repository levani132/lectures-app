import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value) {
      return value.split('').reverse().join('');
  }
}
