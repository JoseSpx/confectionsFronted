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

  constructor(
    private orderService : OrderService,
    private location : Location
  ) { }

  ngOnInit() {
  }

  public save() {
    this.order.client = this.client;
    this.orderService.save(this.order)
      .subscribe(
        () => this.location.back()
      )
  }

}
