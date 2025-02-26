import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./../../feature/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent,
          ),
      },
      {
        path: 'charts',
        loadComponent: () =>
          import('./../../feature/charts/charts.component').then(
            (m) => m.ChartsComponent,
          ),
      },
      {
        path: 'add-product',
        loadComponent: () =>
          import('../../feature/add-product/add-product.component').then(
            (m) => m.AddProductComponent,
          ),
      },
    ],
  },
];
