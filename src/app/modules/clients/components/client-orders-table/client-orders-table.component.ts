import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Client } from '../../../../shared/models/Client';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { OrderService } from '../../../../shared/services/order.service';
import { Order } from '../../../../shared/models/Order';

@Component({
  selector: 'app-client-orders-table',
  templateUrl: './client-orders-table.component.html',
  styleUrls: ['./client-orders-table.component.css']
})
export class ClientOrdersTableComponent implements OnInit {


  public displayedColumns: string[] = ['position', 'date_deal', 'date_trial', 'date_delivery', 'comment','edit'];
  public dataSource;

  @Input()
  public client : Client;

  @ViewChild(MatPaginator)
  public paginator: MatPaginator;

  constructor(
    private orderService : OrderService,
    private router : Router
  ) { }

  ngOnInit() {
    this.findAllMeasureById(this.client.id);
  }

  public findAllMeasureById(id : number) {
    this.orderService.findAllByClientId(id)
      .subscribe(
        data => {
          console.log(data);
          this.dataSource = new MatTableDataSource<Order>(this.insertPositions(data));
          this.dataSource.paginator = this.paginator;
        }
      )
  }

  public insertPositions(orderList : Order []) {
    let i = 0;
    for(let m of orderList) {
      m.position = ++i;
    }
    return orderList;
  }

  public editOrder(idClient : number, idOrder : number) {
    // console.log(idClient + " - " + idOrder);
    this.router.navigateByUrl("/clientes/" + idClient + "/pedidos/" + idOrder);
  }

}
