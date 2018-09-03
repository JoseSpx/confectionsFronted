import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../../../shared/models/Client';

@Component({
  selector: 'app-client-orders-table',
  templateUrl: './client-orders-table.component.html',
  styleUrls: ['./client-orders-table.component.css']
})
export class ClientOrdersTableComponent implements OnInit {

  public displayedColumns: string[] = ['position', 'date_dial', 'date_trial', 'date_delivery', 'comment','edit'];
  public dataSource;

  @Input()
  public client : Client;

  constructor() { }

  ngOnInit() {
  }

}
