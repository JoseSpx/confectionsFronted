import { Component, OnInit } from '@angular/core';
import { Measure } from '../../../../shared/models/Measure';
import { measures } from '../../../../shared/mocks/measures';



@Component({
  selector: 'app-client-measures-table',
  templateUrl: './client-measures-table.component.html',
  styleUrls: ['./client-measures-table.component.css']
})
export class ClientMeasuresTableComponent implements OnInit {

  public displayedColumns: string[] = ['position', 'type-clothes', 'title', 'comment'];
  public dataSource = measures;

  constructor() { }

  ngOnInit() {
    console.log(measures);
  }

}
