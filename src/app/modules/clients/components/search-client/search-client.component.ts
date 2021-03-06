
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../../shared/services/client.service';
import { Router } from '@angular/router';

declare var swal : any;

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.css']
})
export class SearchClientComponent implements OnInit {

  public value : string = "1234";
  public placeholder : string = "Buscar un Cliente por DNI";
  private band : boolean = true;


  constructor( private clientService : ClientService, private router : Router ) { }

  ngOnInit() {
  }

  public onChange($event) {
    let value = $event.value;
    if (value == "dni") {
      this.band = true;
      this.placeholder = "Buscar un Cliente por DNI";
    } else {
      this.band = false;
      this.placeholder = "Buscar un Cliente por Apellidos";
    }
  }

  public search() {
    if(this.band) {
      this.clientService.searchByDniClient(this.value.trim())
        .subscribe(
          data => {
            if (data != null) {
              if (data.length == 1) {
                this.router.navigateByUrl("/clientes/" + data[0].id)
              }
              else {
                swal({
                  title : "",
                  html : "<h4> Ingrese el DNI </h4>",
                  confirmButtonColor: '#303F9F',
                });
              }
            } else {
              swal({
                title : "",
                html : "<h4>Cliente no Registrado</h4>",
                confirmButtonColor: '#303F9F',
              });
            }
          }
        );


    } else {
      this.clientService.searchByLastNameClient(this.value.trim())
        .subscribe(
          data => {
            console.log(data)
          }
        )
    }
  }

}
