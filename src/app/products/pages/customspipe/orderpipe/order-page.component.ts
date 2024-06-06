import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ToggleCasePipe } from '../../../pipes/toggle-case.pipe';

@Component({
  standalone: true,
  selector: 'order-page',
  templateUrl: 'order-page.component.html',
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    //Pipes
    ToggleCasePipe,
  ],
})
export class OrderPageComponent {}
