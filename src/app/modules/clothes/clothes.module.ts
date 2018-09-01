import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { TableTypeClothesComponent } from './components/table-type-clothes/table-type-clothes.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule
  ],
  declarations: [
    MainDashboardComponent,
    TableTypeClothesComponent
  ]
})
export class ClothesModule { }
