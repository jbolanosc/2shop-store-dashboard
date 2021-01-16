import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesLandingComponent } from './sales-landing/sales-landing.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesCardComponent } from './sales-card/sales-card.component';

@NgModule({
  declarations: [SalesLandingComponent, SalesListComponent, SalesCardComponent],
  imports: [CommonModule, SalesRoutingModule],
  exports: [SalesLandingComponent, SalesListComponent, SalesCardComponent],
})
export class SalesModule {}
