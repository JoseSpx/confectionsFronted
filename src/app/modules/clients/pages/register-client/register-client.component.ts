import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientService } from '../../../../shared/services/client.service';
import { Client } from '../../../../shared/models/Client';
import { ButtonBackComponent } from '../../../../shared/components/button-back/button-back.component';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  @ViewChild('btnBack') 
  private btnBack : ButtonBackComponent;

  public client : Client = {
    name : "",
    lastName : "",
    address : "",
    dni : "",
    phone1 : "",
    phone2 : ""
  };

  constructor( private clientService : ClientService ) { }

  ngOnInit() {
  }

  public saveClient() {
    this.clientService.saveClient(this.client)
      .subscribe(
        () => this.btnBack.goBack()
      );
  }


}
