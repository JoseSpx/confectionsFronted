import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { Measure } from '../../../../shared/models/Measure';
import { Client } from '../../../../shared/models/Client';
import { Clothe } from '../../../../shared/models/Clothe';
import { TypeMeasure } from '../../../../shared/models/TypeMeasure';
// import { measures } from '../../../../shared/mocks/measures';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { MeasureService } from '../../../../shared/services/measure.service';
import { TypeMeasureService } from '../../../../shared/services/type-measure.service';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';


interface ClientMeasures {
  position? : number;
  id : number;
  name : string;
  model : string;
  clientId : number;
  typeMeasureId? : number;
  typeMeasure? : TypeMeasure
}



@Component({
  selector: 'app-client-measures-table',
  templateUrl: './client-measures-table.component.html',
  styleUrls: ['./client-measures-table.component.css']
})
export class ClientMeasuresTableComponent implements OnInit {

  public displayedColumns: string[] = ['position', 'type-measure', 'model', 'edit'];
  public dataSource;

  private clientMeasureList : ClientMeasures [];

  @Input()
  public client : Client;

  @Input()
  public clothesSelected : Clothe;

  @ViewChild(MatPaginator)
  public paginator: MatPaginator;

  constructor(
    private router : Router,
    private typeMeasureService : TypeMeasureService,
    private measureService : MeasureService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.findAllTypeMeasureByClothesId(this.clothesSelected.id);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.findAllTypeMeasureByClothesId(this.clothesSelected.id);
  }

  // fill the select input
  public findAllTypeMeasureByClothesId(id : number) {
    this.typeMeasureService.findAllByClothesId(id)
      .subscribe(
        data => {
          // console.log(data);
          // this.dataSource = new MatTableDataSource<TypeMeasure>(this.insertPositions(data));
          // this.dataSource.paginator = this.paginator;
          this.findAllMeasuresByClientIdAndClothesId(this.client.id, this.clothesSelected.id, data);
        }
      )
  }

  public findAllMeasuresByClientIdAndClothesId(idClient : number, idClothes : number, allTypeMeasures : TypeMeasure[]) {
    this.measureService.findAllByClientIdAndClothesId(idClient, idClothes)
      .subscribe(
        data => {

          let measureClientList : ClientMeasures [] = [];

          for (let i = 0; i < allTypeMeasures.length ; i++) {
            let mcl = {
              id : null,
              name : allTypeMeasures[i].name,
              model : "0cm",
              clientId : this.client.id,
              typeMeasureId : allTypeMeasures[i].id,
              typeMeasure : allTypeMeasures[i]
            }
            measureClientList.push(mcl);
          }

          // console.log("DATA ", data);

          for(let i = 0; i < measureClientList.length; i++) {
            for(let j = 0; j < data.length ; j++) {
              if ( measureClientList[i].typeMeasureId == data[j].typeMeasure.id ) {
                let mcl = {
                  id : data[j].id,
                  name : measureClientList[i].name,
                  model : data[j].model,
                  clientId : this.client.id,
                  typeMeasureId : data[j].typeMeasure.id
                }
                
                measureClientList[i] = mcl;
              }
            }
          }

          // console.log("FINAL ", measureClientList);
          this.dataSource = new MatTableDataSource<TypeMeasure>(this.insertPositions(measureClientList));
          this.dataSource.paginator = this.paginator;
          this.clientMeasureList = measureClientList;
        }
      )
  }

  public insertPositions(typeMeasureList : TypeMeasure []) {
    let i = 0;
    for(let m of typeMeasureList) {
      m.position = ++i;
    }
    return typeMeasureList;
  }

  public edit(id : number, name : string) {
    let clientMeasure : ClientMeasures;
    for(let i = 0; i < this.clientMeasureList.length ; i++) {
      if (this.clientMeasureList[i].id == id) {
        clientMeasure = this.clientMeasureList[i];
        break;
      }
    }

    if (clientMeasure.id == null) {
      this.openDialog(clientMeasure, "save");
    } else {
      this.openDialog(clientMeasure, "update");
    }

  }

  // DIALOG
  public openDialog(clientMeasure : ClientMeasures, operation : string): void {
    
    let modelAux : string = clientMeasure.model;

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: { clientMeasure: clientMeasure }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ', result);

      if (operation == "save") {
        if (result != null) {
          // console.log("SAVE : ", result)

          let m : Measure = {
            id : null,
            model : result.model,
            client : this.client,
            typeMeasure : result.typeMeasure
          }

          this.measureService.save(m)
            .subscribe(
              () => {
                this.findAllTypeMeasureByClothesId(this.clothesSelected.id);
              }
            )
        }
      } else if (operation == "update") {
       
        if (result != null && result.model != null) {

          // console.log("ACTUALIZAR ------- " + result.model + " --- ");
          this.measureService.update(result.id, result)
          .subscribe(
            () => {
              this.findAllTypeMeasureByClothesId(this.clothesSelected.id);
            }
          )
        } else {
          clientMeasure.model = modelAux;
        }
        
      }
    });
  }

}
