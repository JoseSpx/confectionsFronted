import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component'
import { MainDashboardComponent as ClientMainDashBoardComponent } from './modules/clients/pages/main-dashboard/main-dashboard.component';

const routes : Routes = [
  { path : 'inicio', component : DashboardComponent },
  { path : '', redirectTo : 'inicio', pathMatch : 'full' },
  { path : 'clientes', component : ClientMainDashBoardComponent },
  { path :  '**', redirectTo : 'inicio', pathMatch : 'full'}
]

@NgModule({
  exports : [ RouterModule ],
  imports : [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
