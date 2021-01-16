import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';

import { LandingComponent } from './landing/landing.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [LandingComponent, NavigationComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [LandingComponent, NavigationComponent],
})
export class LandingModule {}
