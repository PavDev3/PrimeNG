import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
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
    ToolbarModule,
    SplitButtonModule,
    //Pipes
    ToggleCasePipe,
  ],
})
export class OrderPageComponent {
  items = [
    {
      label: 'Save',
      icon: 'pi pi-check',
    },
    {
      label: 'Update',
      icon: 'pi pi-refresh',
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
    },
    {
      label: 'Home',
      icon: 'pi pi-home',
    },
  ];
}
