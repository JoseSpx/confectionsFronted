import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard/dashboard.component'
import { MainDashboardComponent as ClientMainDashBoardComponent } from './modules/clients/pages/main-dashboard/main-dashboard.component';
import { RegisterClientComponent } from './modules/clients/pages/register-client/register-client.component';
import { ListAllClientsComponent } from './modules/clients/pages/list-all-clients/list-all-clients.component';
import { ClientDetailComponent } from './modules/clients/pages/client-detail/client-detail.component';
import { MainDashboardComponent as ClothesMainComponent  } from './modules/clothes/pages/main-dashboard/main-dashboard.component';
import { ClientMeasuresComponent } from './modules/clients/pages/client-measures/client-measures.component';
import { NewMeasureComponent } from './modules/clients/pages/new-measure/new-measure.component';
import { EditMeasureComponent } from './modules/clients/pages/edit-measure/edit-measure.component';
import { ClientOrderComponent } from './modules/clients/pages/client-order/client-order.component';
import { NewOrderComponent } from './modules/orders/pages/new-order/new-order.component';
import { EditOrderComponent } from './modules/orders/pages/edit-order/edit-order.component';
import { MainComponent as OrderMainComponent } from './modules/orders/pages/main/main.component';


const routes : Routes = [
  { path : '', redirectTo : 'inicio', pathMatch : 'full'},
  { path : 'inicio', component : DashboardComponent },
  { 
    path : 'clientes', 
    children : [
      { path : '', component : ClientMainDashBoardComponent  },
      { path : 'registrar', component : RegisterClientComponent },
      { path : 'listar', component : ListAllClientsComponent },
      { path : ':id', component : ClientDetailComponent },
      { 
        path : ':id/medidas', 
        children : [
          { path : '', component : ClientMeasuresComponent },
          { path : 'nuevo', component : NewMeasureComponent },
          { path : ':idmeasure', component : EditMeasureComponent }
        ]
       },
      { 
         path : ':id/pedidos',
         children : [
           { path : '', component : ClientOrderComponent },
           { path : 'nuevo', component : NewOrderComponent },
           { path : ':idOrder', component : EditOrderComponent }
         ]
      }
    ]
  },
  { path : 'ropa', component : ClothesMainComponent },
  { 
    path : 'pedidos', component : OrderMainComponent
  },
  { path :  '**', redirectTo : 'inicio', pathMatch : 'full'}
]

@NgModule({
  exports : [ RouterModule ],
  imports : [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
