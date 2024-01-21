import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDot',
  standalone: true,
})
export class RemoveDotPipe implements PipeTransform {
  transform(value: number): string {
    return value.toString().replace('.', '');
  }
}
