import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard.component';
import { SearchClientComponent } from './components/search-client/search-client.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { ComponentsModule } from './../../shared/components/components.module';
import { RegisterClientComponent } from './pages/register-client/register-client.component';
import { MatIconModule } from '@angular/material/icon';
import { ListAllClientsComponent } from './pages/list-all-clients/list-all-clients.component';
import { MatDividerModule } from '@angular/material/divider';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';
import { MatTableModule } from '@angular/material/table';
import { ClientDetailComponent } from './pages/client-detail/client-detail.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ClientService } from './../../shared/services/client.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ClientMeasuresComponent } from './pages/client-measures/client-measures.component';
import { ClientMeasuresTableComponent } from './components/client-measures-table/client-measures-table.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    ComponentsModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressBarModule,
    FormsModule,
    MatDialogModule
  ],
  declarations: [
    MainDashboardComponent, 
    SearchClientComponent, 
    RegisterClientComponent, 
    ListAllClientsComponent, 
    ClientsTableComponent, 
    ClientDetailComponent,
    ClientMeasuresComponent,
    ClientMeasuresTableComponent
  ],
  providers : [
    ClientService
  ]
})
export class ClientsModule { }
