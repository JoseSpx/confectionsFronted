import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../../shared/services/client.service';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../../../../shared/models/Client';

@Component({
  selector: 'app-client-order',
  templateUrl: './client-order.component.html',
  styleUrls: ['./client-order.component.css']
})
export class ClientOrderComponent implements OnInit {

  private idclient : number;
  public client : Client;

  constructor(
    private route : ActivatedRoute,
    private clientService : ClientService
  ) { }

  ngOnInit() {
    this.idclient = this.getIdClient();
    this.findClient(this.idclient);
  }

  private getIdClient() {
    let id : number = +this.route.snapshot.paramMap.get("id");
    return id;
  }

  private findClient(id : number) {
    this.clientService.findClientByID(id)
      .subscribe(
        data => this.client = data
      )
  }

}
