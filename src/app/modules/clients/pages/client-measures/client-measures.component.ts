import { Component, OnInit , Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Clothe } from '../../../../shared/models/Clothe';
import { Router, ActivatedRoute } from '@angular/router';
import { Client } from '../../../../shared/models/Client';
import { ClientService } from '../../../../shared/services/client.service';
import { ClothesService } from './../../../../shared/services/clothes.service';

@Component({
  selector: 'app-client-measures',
  templateUrl: './client-measures.component.html',
  styleUrls: ['./client-measures.component.css']
})
export class ClientMeasuresComponent implements OnInit {

  private id : number;
  public client : Client;
  public clothesList : Clothe[] = [];

  public clothesSelected : Clothe;

  constructor(
    public dialog: MatDialog,
    private router : Router,
    private route : ActivatedRoute,
    private clientService : ClientService,
    private clothesService : ClothesService) { }

  ngOnInit() {
    this.id = this.getId();
    this.clientService.findClientByID(this.id).subscribe(
      data => this.client = data
    )

    this.clothesService.findAllClothes()
      .subscribe(
        data => { 
          this.clothesList = data;
          if (this.clothesList.length >= 1) {
            this.clothesSelected = this.clothesList[0];
            //alert(this.clothesclothesSelected.name);
          }
          // console.log(data);
        }
      )
  }

  // public newMeasure() {
    
  //   this.router.navigateByUrl("/clientes/" + this.id + "/medidas/nuevo");
  // }

  public getId() : number {
    let id = +this.route.snapshot.paramMap.get("id");
    return id;
  } 

  public changeClothes() {
    console.log("changed " + this.clothesSelected.name);
  }

  // public openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     width: '400px',
  //     data: {
  //       clothesList : this.clothesList
  //     }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log(result);
  //   });
  // }

}

