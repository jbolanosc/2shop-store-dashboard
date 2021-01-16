import { StoreFormComponent } from './store-form/store-form.component';
import { StoreLandingComponent } from './store-landing/store-landing.component';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreCardComponent } from './store-card/store-card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StoreLandingComponent,
  },
  {
    path: ':id',
    component: StoreCardComponent,
  },
  {
    path: 'edit/:id',
    component: StoreFormComponent,
  },
  {
    path: 'add',
    component: StoreFormComponent,
  },
  {
    path: 'all',
    component: StoreListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
