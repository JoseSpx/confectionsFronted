import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-all-clients',
  templateUrl: './list-all-clients.component.html',
  styleUrls: ['./list-all-clients.component.css']
})
export class ListAllClientsComponent implements OnInit {

  public loaded : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public hideProgressBar($event) {
    this.loaded = $event;
  }

}
