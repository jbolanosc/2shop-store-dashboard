import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreCardComponent } from './store-card/store-card.component';
import { StoreFormComponent } from './store-form/store-form.component';
import { StoreLandingComponent } from './store-landing/store-landing.component';
import { StoreListComponent } from './store-list/store-list.component';


@NgModule({
  declarations: [StoreCardComponent, StoreFormComponent, StoreLandingComponent, StoreListComponent],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
