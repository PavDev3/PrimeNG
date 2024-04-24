import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./shared/components/menu/services/menu.routes').then(
        (m) => m.PRODUCTS_ROUTES
      ),
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];
