import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminProductListComponent } from './pages/admin-product-list/admin-product-list.component';


@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminProductListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
