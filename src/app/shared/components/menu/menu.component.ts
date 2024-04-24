import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  standalone: true,
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  imports: [MenubarModule, RouterLink],
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] | undefined;

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: 'products/basics',
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'products/numbers',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'products/common',
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Otros elementos',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Mayúsculas y minúsculas',
                icon: 'pi pi-sort-alpha-up',
                routerLink: 'pipes/mayúsculas',
              },
              {
                label: 'Ordenar',
                icon: 'pi pi-sort-amount-up',
                routerLink: 'pipes/ordenar',
              },
            ],
          },
        ],
      },
    ];
  }

  constructor() {}
}
