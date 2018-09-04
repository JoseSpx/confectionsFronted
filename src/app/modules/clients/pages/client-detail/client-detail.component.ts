import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../../../shared/services/client.service';
import { Client } from '../../../../shared/models/Client';
import { Location } from '@angular/common';
import { ButtonBackComponent } from '../../../../shared/components/button-back/button-back.component';

declare var swal : any;

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  public id : number;
  public client : Client;

  @ViewChild('btnBack')
  private btnBack : ButtonBackComponent;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private clientService : ClientService, 
    private location : Location) { }

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

    this.client.name = this.client.name.trim();
    this.client.lastName = this.client.lastName.trim();
    this.client.address = this.client.address.trim();
    this.client.dni = this.client.dni.trim();
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
            this.clientService.updateClient(this.client.id, this.client)
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

  public deleteClient() {
    swal({
      title: 'Está seguro ?',
      text: "Puede eliminar información muy importante!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#303F9F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText : 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.clientService.deleteClient(this.client.id)
        .subscribe(
          () => { 
            this.btnBack.goBack()
          }
      );
      }
      
    })
  }

  public goToMeasureClient () {
    let url : string = "/clientes/" + this.id + "/medidas";
    this.router.navigateByUrl(url);
  }

  public goOrderClient() {
    let url : string = "/clientes/" + this.id + "/pedidos";
    this.router.navigateByUrl(url);
  }


}
