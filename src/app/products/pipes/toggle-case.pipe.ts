import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
  standalone: true,
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
