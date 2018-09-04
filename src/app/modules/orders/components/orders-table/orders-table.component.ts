import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { OrderService } from '../../../../shared/services/order.service';
import { Order } from '../../../../shared/models/Order';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements OnInit {

  public displayedColumns: string[] = ['dateDeal', 'dateTrial', 'dateDelivery', 'comment', 'edit'];
  public dataSource;

  @ViewChild(MatPaginator) 
  public paginator: MatPaginator;

  constructor(
    private orderService : OrderService
  ) { }

  ngOnInit() {
    this.findAllOrders();
  }

  public findAllOrders() {
    this.orderService.findAll()
      .subscribe(
        data => {
          this.dataSource = new MatTableDataSource<Order>(data);
          this.dataSource.paginator = this.paginator;
          // console.log(data);
        }
      )
  }


}
