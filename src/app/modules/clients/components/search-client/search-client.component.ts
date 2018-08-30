import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.css']
})
export class SearchClientComponent implements OnInit {

  public placeholder : string = "Buscar un Cliente por DNI";

  constructor() { }

  ngOnInit() {
  }

  public onChange($event) {
    let value = $event.value;
    if (value == "dni") {
      this.placeholder = "Buscar un Cliente por DNI";
    } else {
      this.placeholder = "Buscar un Cliente por Apellidos";
    }
  }

}
