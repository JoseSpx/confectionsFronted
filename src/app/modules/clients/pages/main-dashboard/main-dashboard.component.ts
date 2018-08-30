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
  }

  public getActivitiesData() : ShortCutActivityPane[] {
    return [
      {
        title : "Inventario de Pedidos para Hoy ",
        imageUrl : "./../../../../assets/img/traje.png",
        subtitle : "Cantidad : 12",
        detailUrl : "#"
      },
      {
        title : "Ultimos Pedidos Realizados",
        imageUrl : "./../../../../assets/img/dress.png",
        subtitle : "Cantidad : 10",
        detailUrl : "#"
      },
      {
        title : "Reporte de Pedidos del Día",
        imageUrl : "./../../../../assets/img/contract.png",
        subtitle : " _ ",
        detailUrl : "#"
      }
    ];
  }

}
