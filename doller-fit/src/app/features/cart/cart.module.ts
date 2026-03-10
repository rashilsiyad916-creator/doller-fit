import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './pages/cart/cart.component';
import { AddressComponent } from './pages/address/address.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';


@NgModule({
  declarations: [
    CartComponent,
    AddressComponent,
    MycartComponent,
    OrderSuccessComponent,
    CheckOutComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
