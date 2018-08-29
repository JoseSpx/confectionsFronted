import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component'

const routes : Routes = [
  { path : 'home', component : DashboardComponent },
  { path : '', redirectTo : '/home', pathMatch : 'full' }
]

@NgModule({
  exports : [ RouterModule ],
  imports : [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
