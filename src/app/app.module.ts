import { AuthInterceptorService } from './services/interceptors/token.interceptor';
import { CanActivateViaAuthGuard } from './services/guards/auth.guard';
import { AuthService } from './services/auth.service';
import { AuthModule } from './modules/auth/auth.module';
import { StoreModule } from './modules/store/store.module';
import { SalesModule } from './modules/sales/sales.module';
import { ProductModule } from './modules/product/product.module';
import { LandingModule } from './modules/landing/landing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    ProductModule,
    SalesModule,
    StoreModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    CanActivateViaAuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
