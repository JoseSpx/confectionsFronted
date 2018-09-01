import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-type-clothes',
  templateUrl: './table-type-clothes.component.html',
  styleUrls: ['./table-type-clothes.component.css']
})
export class TableTypeClothesComponent implements OnInit {

  public displayedColumns: string[] = ['Nro', 'name', 'edit'];
  // public dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
