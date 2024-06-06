import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products/basics',
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
    path: 'customs',
    loadChildren: () =>
      import('./shared/components/menu/services/menu.routes').then(
        (m) => m.CUSTOMS_ROUTES
      ),
  },
  {
    path: '**',
    redirectTo: 'products/basics',
  },
];
