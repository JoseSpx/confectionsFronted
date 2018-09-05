import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientService } from '../../../../shared/services/client.service';
import { Client } from '../../../../shared/models/Client';
import { ButtonBackComponent } from '../../../../shared/components/button-back/button-back.component';

declare var swal : any;

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
    email : "",
    dni : "",
    phone1 : "",
    phone2 : ""
  };

  constructor( private clientService : ClientService ) { }

  ngOnInit() {
  }

  public saveClient() {

    this.client.name = this.client.name.trim();
    this.client.lastName = this.client.lastName.trim();
    this.client.address = this.client.address.trim();
    this.client.dni = this.client.dni.trim();
    this.client.email = this.client.email.trim();
    this.client.phone1 = this.client.phone1.trim();
    this.client.phone2 = this.client.phone2.trim();

    if (this.client.name == "" || this.client.dni == "" || this.client.lastName == "") {
      swal({
        title : "",
        html : "<h4> Complete los campos obligatorios </h4>",
        confirmButtonColor: '#303F9F',
        });

        return;
    }

    this.clientService.searchByDniClient(this.client.dni)
      .subscribe(
        data => {
          if (data == null) {
            // console.log("no existe", data)
            this.clientService.saveClient(this.client)
              .subscribe(
                 () => this.btnBack.goBack()
            );

          } else {
            // console.log("SI existe", data)
            swal({
              title : "",
              html : "<h4> Dni ya existe </h4>",
              confirmButtonColor: '#303F9F',
              });
          }
        }
      )

    
  }


}
