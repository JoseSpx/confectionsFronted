import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderComponent } from './pages/new-order/new-order.component';
import { OrderService } from '../../shared/services/order.service';
import { ComponentsModule } from '../../shared/components/components.module';
import { MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatNativeDateModule, MatPaginatorModule } from '@angular/material';
import { FormOrderComponent } from './components/form-order/form-order.component';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { EditOrderComponent } from './pages/edit-order/edit-order.component';
import { MainComponent } from './pages/main/main.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers : [
    OrderService
  ],
  declarations: [
    NewOrderComponent,
    FormOrderComponent,
    EditOrderComponent,
    MainComponent,
    OrdersTableComponent
  ]
})
export class OrdersModule { }
