import { CommonModule, registerLocaleData } from '@angular/common';
import localeEnGB from '@angular/common/locales/en-GB';
import localeEs from '@angular/common/locales/es';

import localeFrCA from '@angular/common/locales/fr-CA';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ProductsComponent } from '../../products.component';

registerLocaleData(localeEnGB);
registerLocaleData(localeFrCA);
registerLocaleData(localeEs);

@Component({
  standalone: true,
  selector: 'app-basics-page',
  imports: [
    ProductsComponent,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    CommonModule,
  ],
  templateUrl: 'basics-page.component.html',
})
export class BasicsPageComponent implements OnInit {
  public nameLower: string = 'pablo';
  public nameUpper: string = 'PABLO';
  public nameComplete: string = 'pAblO nUñEz';
  public customDate: Date = new Date();

  constructor() {}

  ngOnInit() {}
}
