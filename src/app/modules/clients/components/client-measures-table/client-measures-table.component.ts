import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Measure } from '../../../../shared/models/Measure';
// import { measures } from '../../../../shared/mocks/measures';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MeasureService } from '../../../../shared/services/measure.service';
import { Router } from '@angular/router';


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
    private measureService : MeasureService,
    private router : Router
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

  public edit(id : number) {
    let url : string = "/clientes/" + this.clientId + "/medidas/" + id;
    this.router.navigateByUrl(url);
  }

}
