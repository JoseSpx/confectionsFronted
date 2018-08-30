import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component'
import { MainDashboardComponent as ClientMainDashBoardComponent } from './modules/clients/pages/main-dashboard/main-dashboard.component';
import { RegisterClientComponent } from './modules/clients/pages/register-client/register-client.component';

const routes : Routes = [
  { path : '', redirectTo : 'inicio', pathMatch : 'full'},
  { path : 'inicio', component : DashboardComponent },
  { 
    path : 'clientes', 
    children : [
      { path : '', component : ClientMainDashBoardComponent  },
      { path : 'registrar', component : RegisterClientComponent }
    ]
  },
  { path :  '**', redirectTo : 'inicio', pathMatch : 'full'}
]

@NgModule({
  exports : [ RouterModule ],
  imports : [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
