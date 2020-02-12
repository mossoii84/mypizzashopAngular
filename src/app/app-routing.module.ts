import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PizzaComponent} from './pizza/pizza.component';
import {CartComponent} from './cart/cart.component';
import {OrdersComponent} from './orders/orders.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {AuthGuard} from './security/service/authguard';


const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full', component: PizzaComponent},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
