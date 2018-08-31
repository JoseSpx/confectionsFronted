import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from './../../../../shared/models/Client';
import { clients } from '../../../../shared/mocks/clients';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent implements OnInit {

  public displayedColumns: string[] = ['nro', 'name', 'lastName', 'dni', 'phone1', 'edit'];
  public dataSource;

  @ViewChild(MatPaginator) 
  public paginator: MatPaginator;

  constructor(private router : Router) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Client>(this.putNroOrder());
    this.dataSource.paginator = this.paginator;
  }

  public putNroOrder() : Client[] {
    let i = 0;
    for(let client of clients) {
      client.position = ++i;
    }
    return clients;
  }

  public goClientDetail(id : number) {
    this.router.navigate(['/clientes/', id]);
  }

}
