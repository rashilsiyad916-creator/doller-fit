import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',loadChildren:()=>import('./features/home/home.module').then(m=>m.HomeModule)},
  { path:'auth',loadChildren:()=>import('./features/auth/auth.module').then(m=> m.AuthModule)},
  { path:'products',loadChildren:()=>import('./features/products/products.module').then(m=>m.ProductsModule)},
  { path:'cart',loadChildren:()=>import('./features/cart/cart.module').then(m=>m.CartModule)},
   {path: 'admin',loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)},
  { path:'home',redirectTo:'',pathMatch:'full'},
      { path:'orders',loadChildren:()=>import('./features/orders/orders.module').then(m=>m.OrdersModule),canActivate:[authGuard]},

    
   { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
