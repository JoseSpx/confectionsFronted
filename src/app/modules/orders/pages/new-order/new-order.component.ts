import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../../shared/services/client.service';
import { Client } from '../../../../shared/models/Client';
import { Order } from '../../../../shared/models/Order';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  private clientId : number;
  public client : Client;

  public order : Order = {
    id : null,
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
    private route : ActivatedRoute,
    private clientService : ClientService
  ) { }

  ngOnInit() {
    this.clientId = this.getClientId();
    this.findClientById(this.clientId);
  }

  public getClientId() {
    let id : number = +this.route.snapshot.paramMap.get("id");
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

}
