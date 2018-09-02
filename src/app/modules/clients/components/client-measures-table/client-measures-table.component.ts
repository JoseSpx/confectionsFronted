import { Component, OnInit, ViewChild } from '@angular/core';
import { Measure } from '../../../../shared/models/Measure';
import { measures } from '../../../../shared/mocks/measures';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-client-measures-table',
  templateUrl: './client-measures-table.component.html',
  styleUrls: ['./client-measures-table.component.css']
})
export class ClientMeasuresTableComponent implements OnInit {

  public displayedColumns: string[] = ['position', 'type-clothes', 'title', 'comment', 'edit'];
  public dataSource;

  @ViewChild(MatPaginator)
  public paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Measure>(this.insertPositions(measures));
    this.dataSource.paginator = this.paginator;
    console.log(measures);
  }

  public insertPositions(measuresList : Measure []) {
    let i = 0;
    for(let m of measuresList) {
      m.position = ++i;
    }
    return measuresList;
  }

}
