import { Pipe } from '@angular/core';
import { Hero } from '../interface/hero.interface';

@Pipe({
  standalone: true,
  name: 'sortByPipe',
})
export class SortByPipe {
  transform(heroes: Hero[], sortBy?: keyof Hero | ''): Hero[] {
    switch (sortBy) {
      case 'name':
        return heroes.sort((a, b) => (a.name > b.name ? 1 : -1));
      case 'color':
        return heroes.sort((a, b) => (a.color > b.color ? 1 : -1));
      case 'canFly':
        return heroes.sort((a, b) => (a.canFly < b.canFly ? 1 : -1));

      default:
        return heroes;
    }
  }
}
