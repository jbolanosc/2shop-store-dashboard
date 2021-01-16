import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductLandingComponent } from './product-landing/product-landing.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductLandingComponent,
    ProductFormComponent,
    ProductCardComponent,
  ],
  imports: [CommonModule, ProductRoutingModule],
  exports: [
    ProductListComponent,
    ProductLandingComponent,
    ProductFormComponent,
    ProductCardComponent,
  ],
})
export class ProductModule {}
