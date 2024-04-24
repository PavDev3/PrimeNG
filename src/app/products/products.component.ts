import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
  ],
  templateUrl: './products.component.html',
})
export class ProductsComponent {}
