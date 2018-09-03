import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../shared/models/Client';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../../shared/services/client.service';
import { OrderService } from '../../../../shared/services/order.service';
import { Order } from '../../../../shared/models/Order';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  private clientId : number;
  private orderId : number;
  public client : Client;
  public order : Order;

  constructor(
    private route : ActivatedRoute,
    private clientService : ClientService,
    private orderService : OrderService
  ) { }

  ngOnInit() {
    this.clientId = this.getClientId();
    this.orderId = this.getOrderId();
    this.findClientById(this.clientId);
    this.findOrderById(this.orderId);
  }

  public getClientId() {
    let id : number = +this.route.snapshot.paramMap.get("id");
    return id;
  }

  public getOrderId() {
    let id : number = +this.route.snapshot.paramMap.get("idOrder");
    return id;
  }

  public findClientById(id : number) {
    this.clientService.findClientByID(id)
      .subscribe(
        data => { 
          this.client = data;
        }
      )
  }

  public findOrderById(id : number) {
    this.orderService.findById(id)
      .subscribe(
        data => { 
          this.order = data;
          console.log(data);
        }
      )
  }

}
