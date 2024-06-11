import { Pipe } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'canFly',
})
export class CanFlyPipe {
  transform(value: boolean): string {
    return value ? 'Si' : 'No';
  }
}
