import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ComponentsModule } from './shared/components/components.module';
import { ClothesModule } from './modules/clothes/clothes.module';
import { ClientsModule } from './modules/clients/clients.module';
import { HttpClientModule }    from '@angular/common/http';

import {  MatPaginatorIntl } from '@angular/material';
import { getDutchPaginatorIntl } from './modules/clients/components/client-measures-table/dutch-paginator-intl';
import { OrdersModule } from './modules/orders/orders.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    ComponentsModule,
    ClientsModule,
    HttpClientModule,
    ClothesModule,
    OrdersModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getDutchPaginatorIntl() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
