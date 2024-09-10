import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: true,
})
export class CustomPipe implements PipeTransform {
  transform(value: number, val2 = 2): number {
    return Math.pow(value, val2);
  }
}
