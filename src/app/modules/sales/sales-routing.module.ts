import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesCardComponent } from './sales-card/sales-card.component';
import { SalesLandingComponent } from './sales-landing/sales-landing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SalesLandingComponent,
  },
  {
    path: ':id',
    component: SalesCardComponent,
  },
  {
    path: 'all',
    component: SalesListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
