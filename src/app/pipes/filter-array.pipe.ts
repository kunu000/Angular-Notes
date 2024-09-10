import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray',
  standalone: true,
})
export class FilterArrayPipe implements PipeTransform {
  transform(array: any[]) {
    console.log('filter pipe run');
    return [...array].reverse();
  }
}
