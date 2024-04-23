import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  standalone: true,
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  imports: [MenuModule],
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] | undefined;

  ngOnInit() {
    this.menuItems = [
      { label: 'New', icon: 'pi pi-fw pi-plus' },
      { label: 'Open', icon: 'pi pi-fw pi-folder-open' },
      { label: 'Undo', icon: 'pi pi-fw pi-refresh' },
    ];
  }
  constructor() {}
}
