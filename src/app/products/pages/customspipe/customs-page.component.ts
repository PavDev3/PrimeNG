import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';

@Component({
  standalone: true,
  selector: 'customs-page',
  imports: [
    RouterOutlet,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
  ],
  templateUrl: './customs-page.component.html',
})
export class CustomsPageComponent {}
