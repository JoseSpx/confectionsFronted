import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Measure } from '../../../../shared/models/Measure';
// import { measures } from '../../../../shared/mocks/measures';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MeasureService } from '../../../../shared/services/measure.service';


@Component({
  selector: 'app-client-measures-table',
  templateUrl: './client-measures-table.component.html',
  styleUrls: ['./client-measures-table.component.css']
})
export class ClientMeasuresTableComponent implements OnInit {

  public displayedColumns: string[] = ['position', 'type-clothes', 'title', 'comment', 'edit'];
  public dataSource;

  @Input()
  public clientId : number;

  @ViewChild(MatPaginator)
  public paginator: MatPaginator;

  constructor(
    private measureService : MeasureService
  ) { }

  ngOnInit() {
    this.findAllMeasureById(this.clientId);
  }

  public findAllMeasureById(id : number) {
    this.measureService.findAllByClientId(id)
      .subscribe(
        data => {
          console.log(data);
          this.dataSource = new MatTableDataSource<Measure>(this.insertPositions(data));
          this.dataSource.paginator = this.paginator;
        }
      )
  }

  public insertPositions(measuresList : Measure []) {
    let i = 0;
    for(let m of measuresList) {
      m.position = ++i;
    }
    return measuresList;
  }

}
