import { CanActivateViaAuthGuard } from './services/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './modules/landing/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LandingComponent,
      },
      {
        path: 'store',
        loadChildren: './modules/store/store.module#StoreModule',
        canActivate: [CanActivateViaAuthGuard],
      },
      {
        path: 'product',
        loadChildren: './modules/product/product.module#ProductModule',
        //canActivate: [CanActivateViaAuthGuard],
      },
      {
        path: 'sales',
        loadChildren: './modules/sales/sales.module#SalesModule',
        canActivate: [CanActivateViaAuthGuard],
      },
      {
        path: 'auth',
        loadChildren: './modules/auth/auth.module#AuthModule',
      },
    ],
  },
  { path: '**', redirectTo: 'landing' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
