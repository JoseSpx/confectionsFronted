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
        imageUrl : "./../../../../assets/img/man.png",
        subtitle : " Crea un nuevo cliente",
        detailUrl : "/clientes/registrar",
        textButton : "Registrar"
      },
      {
        title : "Ver todos los Clientes",
        imageUrl : "./../../../../assets/img/list.png",
        subtitle : "Lista completa de todos los clientes",
        detailUrl : "/clientes/listar",
        textButton : "Ver lista"
      }
    ];
  }

}
