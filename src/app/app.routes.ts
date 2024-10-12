import { Routes } from '@angular/router';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginLayoutComponent,
  },
  {
    path: '',
    component: LoginLayoutComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./layout/dashboard-layout/dashboard-layout.routes').then(
        (m) => m.dashboardRoutes,
      ),
  },
];
