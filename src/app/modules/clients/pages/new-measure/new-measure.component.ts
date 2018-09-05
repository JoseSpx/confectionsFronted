import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientService } from '../../../../shared/services/client.service';
import { Client } from '../../../../shared/models/Client';
import { ActivatedRoute } from '@angular/router';
import { ClothesService } from '../../../../shared/services/clothes.service';
import { Clothe } from '../../../../shared/models/Clothe';
import { Measure } from '../../../../shared/models/Measure';
import { MeasureService } from '../../../../shared/services/measure.service';
import { ButtonBackComponent } from '../../../../shared/components/button-back/button-back.component';

declare var swal : any;

@Component({
  selector: 'app-new-measure',
  templateUrl: './new-measure.component.html',
  styleUrls: ['./new-measure.component.css']
})
export class NewMeasureComponent implements OnInit {

  public client : Client;
  public id : number;
  public clothesList : Clothe[];
  public clothesSelected : Clothe;
  public title : string = "";
  public comment : string = "";

  @ViewChild('btnBack')
  private btnBack : ButtonBackComponent;

  constructor(
    private clientService : ClientService,
    private route : ActivatedRoute,
    private clothesService : ClothesService,
    private measureService : MeasureService
  ) { }

  ngOnInit() {
    this.id = this.getId();
    this.findClient(this.id);
    this.findAllClothes();
    //this.clothesSelected = this.clothesList[0];
  }

  public saveMeasure() {
    this.title = this.title.trim();
    this.comment = this.comment.trim();

    if (this.title == "" || this.comment == "") {
      swal({
        title : "",
        html : "<h4> Existen campos vacios </h4>",
        confirmButtonColor: '#303F9F',
      });

    } else {
      let measure : Measure = {
        model : this.comment,
        client : this.client,
        typemeasure : null
      }

      this.measureService.save(measure)
        .subscribe(
          () => {
            this.btnBack.goBack();
          }
        );

    }

  }

  public getId() : number {
    let id = +this.route.snapshot.paramMap.get("id");
    return id;
  }

  public findClient(id : number) {
    this.clientService.findClientByID(id)
      .subscribe(
        data => this.client = data
      )
  }

  public findAllClothes() {
    this.clothesService.findAllClothes()
      .subscribe(
        data => { 
          this.clothesList = data;
          this.clothesSelected = this.clothesList[0];
        }
      )
  }
 
}
