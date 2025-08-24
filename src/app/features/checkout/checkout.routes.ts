import { Route } from '@angular/router';

const checkoutRoutes: Route[] = [
  {
    path: '',
    loadComponent:()=>import('./checkout.component')
  },
];

export default checkoutRoutes;