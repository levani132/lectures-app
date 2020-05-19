import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value, limit) {
    if (value.length > limit) {
      return value.substr(0, limit) + '...';
    } else {
      return value;
    }
  }
}
