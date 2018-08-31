import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from './../../../../shared/models/Client';
import { clients } from '../../../../shared/mocks/clients';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ClientService } from '../../../../shared/services/client.service';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent implements OnInit {

  public displayedColumns: string[] = ['nro', 'name', 'lastName', 'dni', 'phone1', 'edit', 'orders'];
  public dataSource;
  public clients : Client[];

  @ViewChild(MatPaginator) 
  public paginator: MatPaginator;

  constructor(private router : Router, private clientService : ClientService) { } // 

  ngOnInit() {
    this.getClients();
    //this.dataSource = new MatTableDataSource<Client>(this.putNroOrder());
    //this.dataSource.paginator = this.paginator;
  }

  public getClients() {
      this.clientService.getClients()
       .subscribe(data => {
          this.clients = data;
          this.dataSource = new MatTableDataSource<Client>(this.putNroOrder());
          this.dataSource.paginator = this.paginator;
       });
  }

  public putNroOrder() : Client[] {
    let i = 0;
    for(let client of this.clients) {
      client.position = ++i;
    }
    return this.clients;
  }

  public goClientDetail(id : number) {
    this.router.navigate(['/clientes/', id]);
  }

}
