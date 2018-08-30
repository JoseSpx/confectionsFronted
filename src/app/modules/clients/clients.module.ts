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

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    ComponentsModule,
    MatIconModule
  ],
  declarations: [MainDashboardComponent, SearchClientComponent, RegisterClientComponent]
})
export class ClientsModule { }
