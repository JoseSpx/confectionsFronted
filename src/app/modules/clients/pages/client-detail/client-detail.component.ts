import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../../shared/services/client.service';
import { Client } from '../../../../shared/models/Client';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  public id : number;
  public client : Client;

  constructor(private route : ActivatedRoute, private clientService : ClientService, private location : Location) { }

  ngOnInit() {
    this.id = this.getID();
    this.getClient();
  }

  public getID() {
    let id  : number = +this.route.snapshot.paramMap.get('id');
    return id;
  }

  public getClient() {
    this.clientService.findClientByID(this.id)
      .subscribe(data => {
        this.client = data;
        // console.log(data);
      });
  }

  public updateClient() {
    this.clientService.updateClient(this.client.id, this.client)
      .subscribe(
        () => this.location.back()
      );
    console.log(this.client);
  }


}
