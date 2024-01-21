import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitOverview',
  standalone: true,
})
export class LimitOverviewPipe implements PipeTransform {
  transform(value: string, limit: number = 50): string {
    if (value.length > limit) {
      return value.substring(0, limit) + '...';
    } else {
      return value;
    }
  }
}
