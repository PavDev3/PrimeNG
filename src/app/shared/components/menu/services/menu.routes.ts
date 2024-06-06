import { Routes } from '@angular/router';
import { BasicsPageComponent } from '../../../../products/pages/basics-page/basics-page.component';
import { CustomsPageComponent } from '../../../../products/pages/customspipe/customs-page.component';
import { OrderPageComponent } from '../../../../products/pages/customspipe/orderpipe/order-page.component';
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

export const CUSTOMS_ROUTES: Routes = [
  {
    path: '',
    component: CustomsPageComponent,
    children: [
      {
        path: 'order',
        component: OrderPageComponent,
      },
    ],
  },
];
export class ProductsRoutes {}
