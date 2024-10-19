import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stopwatch',
  standalone: true,
})
export class StopwatchPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
