import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../../../shared/models/Client';
import { Order } from '../../../../shared/models/Order';
import { OrderService } from '../../../../shared/services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.css']
})
export class FormOrderComponent implements OnInit {

  @Input()
  public client : Client;

  @Input()
  public order : Order;

  private state : number; // 0 = create , 1 = update

  /*
  public order : Order = {
    dateDeal : '',
    dateTrial : '',
    dateDelivery : '',
    timeDial : '',
    timeTrial : '',
    timeDelivery : '',
    comment : '',
    client : null
  };
  */

  constructor(
    private orderService : OrderService,
    private location : Location
  ) { }

  ngOnInit() {
    this.getState();
  }

  public getState() {
    if (this.order.id == null) {
      this.state = 0;
    } else {
      this.state = 1;
    }
  }

  public onClickBtn() {
    if (this.state == 0) {
      //alert("nuevo");
      this.save();
    } else {
      // alert("actualizar");
      this.update();
    }
  }

  public save() {
    this.order.client = this.client;
    this.orderService.save(this.order)
      .subscribe(
        () => this.location.back()
      )
  }

  public update() {
    this.order.client = this.client;
    this.orderService.update(this.order.id, this.order)
      .subscribe(
        () => this.location.back()
      )
  }  

}
