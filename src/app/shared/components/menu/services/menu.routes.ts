import { Routes } from '@angular/router';
import { BasicsPageComponent } from '../../../../products/pages/basics-page/basics-page.component';
import { NumbersPageComponent } from '../../../../products/pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from '../../../../products/pages/uncommon-page/uncommon-page.component';
import { ProductsComponent } from '../../../../products/products.component';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'basics',
        component: BasicsPageComponent,
      },
      {
        path: 'uncommon',
        component: UncommonPageComponent,
      },
      {
        path: 'numbers',
        component: NumbersPageComponent,
      },
    ],
  },
];

export class ProductsRoutes {}
