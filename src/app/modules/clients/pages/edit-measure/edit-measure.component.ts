import { Component, OnInit, ViewChild } from '@angular/core';
import { MeasureService } from '../../../../shared/services/measure.service';
import { Client } from '../../../../shared/models/Client';
import { Clothe } from '../../../../shared/models/Clothe';
import { ButtonBackComponent } from '../../../../shared/components/button-back/button-back.component';
import { Measure } from '../../../../shared/models/Measure';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../../../shared/services/client.service';
import { ClothesService } from '../../../../shared/services/clothes.service';

declare var swal : any;

@Component({
  selector: 'app-edit-measure',
  templateUrl: './edit-measure.component.html',
  styleUrls: ['./edit-measure.component.css']
})
export class EditMeasureComponent implements OnInit {

  public measure : Measure;
  private idMeasure : number;
  public clothesList : Clothe[];
  public clothesSelected : Clothe;

  @ViewChild('btnBack')
  private btnBack : ButtonBackComponent;


  constructor(
    private measureService : MeasureService,
    private route : ActivatedRoute,
    private clothesService : ClothesService
  ) { }

  ngOnInit() {
    this.idMeasure = this.getMeasureId();
    this.findAllClothes();
  }

  public updateMeasure() {

    this.measure.model = this.measure.model.trim();

    if (this.measure.model == "") {
      swal({
        title : "",
        html : "<h4> Existen campos vacios </h4>",
        confirmButtonColor: '#303F9F',
      });
    } else {

      let measure : Measure = {
        model : this.measure.model,
        client : this.measure.client,
        typeMeasure : null
      }

      this.measureService.update(this.idMeasure, measure)
        .subscribe(
          () => {
            this.btnBack.goBack();
          }
        );

    }

  }

  public deleteMeasure() {
    swal({
      title: 'Está seguro ?',
      text: "Puede eliminar información muy importante!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#303F9F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText : 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.measureService.deleteById(this.idMeasure)
        .subscribe(
          () => { 
            this.btnBack.goBack()
          }
      );
      }
      
    })

  }

  public getMeasureId() : number {
    let id = +this.route.snapshot.paramMap.get("idmeasure");
    return id;
  }

  public findMeasure(id : number) {
    // this.measureService.findById(id)
    //   .subscribe(
    //     data => { 
    //       this.measure = data;
    //       for (let c of this.clothesList) {
    //         if (this.measure.clothes.id == c.id){
    //           this.clothesSelected = c;
    //           break;
    //         }
    //       }
    //     }
    //   )
  }

  public findAllClothes() {
    this.clothesService.findAllClothes()
      .subscribe(
        data => { 
          this.clothesList = data;
          this.findMeasure(this.idMeasure);
        }
      )
  }

}
