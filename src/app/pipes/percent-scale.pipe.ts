import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentScale',
  standalone: true,
})
export class PercentScalePipe implements PipeTransform {
  transform(value: number, scale: number = 1): string {
    const scaledValue = value / scale;
    return `${scaledValue.toFixed(0)}/10`;
  }
}
