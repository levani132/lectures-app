import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString, propName) {
    if (value.length === 0) {
      return value;
    }
    return value.filter(item => item[propName].includes(filterString));
  }
}
