import { Routes } from '@angular/router';
import { BasicsPageComponent } from '../../../../products/pages/basics-page/basics-page.component';
import { CommonPageComponent } from '../../../../products/pages/common-page/common-page.component';
import { NumbersPageComponent } from '../../../../products/pages/numbers-page/numbers-page.component';
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
        path: 'common',
        component: CommonPageComponent,
      },
      {
        path: 'numbers',
        component: NumbersPageComponent,
      },
    ],
  },
];

export class ProductsRoutes {}
