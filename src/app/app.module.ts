import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import {AgGridModule} from 'ag-grid-angular';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {httpInterceptorProviders} from './security/jwtresponse/Interceptor/interceptorSession';
import { WebsocketchatComponent } from './websocketchat/websocketchat.component';
@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    CartComponent,
    OrdersComponent,
    LoginComponent,
    RegistrationComponent,
    WebsocketchatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule, BrowserAnimationsModule,
    [AgGridModule.withComponents(null)],
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
