import { Component, OnInit } from '@angular/core';
import { ShortCutActivityPane } from './../../../../shared/models/ShortCutActivityPane'

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  public activities : ShortCutActivityPane[];

  constructor() { }

  ngOnInit() {
    this.activities = this.getActivitiesData();
  }

  public getActivitiesData() : ShortCutActivityPane[] {
    return [
      {
        title : "Registrar un Nuevo Cliente",
        imageUrl : "./../../../../assets/img/traje.png",
        subtitle : "-",
        detailUrl : "/clientes/registrar"
      },
      {
        title : "Ver todos los Clientes",
        imageUrl : "./../../../../assets/img/dress.png",
        subtitle : "-",
        detailUrl : "#"
      }
    ];
  }

}
