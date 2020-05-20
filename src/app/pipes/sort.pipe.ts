import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(value: any[]) {
    value.sort((a, b) => {
      return a.owner > b.owner ? 1 : -1;
    });
    return value;
  }
}
