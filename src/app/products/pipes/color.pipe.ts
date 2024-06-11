import { Pipe } from '@angular/core';
import { Color } from '../interface/hero.interface';

@Pipe({
  standalone: true,
  name: 'colorPipe',
})
export class ColorPipe {
  transform(value: string): Color {
    switch (value) {
      case 'Red':
        return Color.Red;
      case 'Green':
        return Color.Green;
      case 'Blue':
        return Color.Blue;
      default:
        'Black';
        return Color.Black;
    }
  }
}
