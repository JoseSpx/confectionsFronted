import { Component, OnInit } from '@angular/core';
import { ClothesService } from './../../../../shared/services/clothes.service';
import { Clothe } from './../../../../shared/models/Clothe';
import { ActivatedRoute } from '@angular/router'
import { TypeMeasure } from './../../../../shared/models/TypeMeasure';
import { TypeMeasureService } from './../../../../shared/services/type-measure.service';

declare var swal : any;

@Component({
  selector: 'app-clothes-list-measures',
  templateUrl: './clothes-list-measures.component.html',
  styleUrls: ['./clothes-list-measures.component.css']
})
export class ClothesListMeasuresComponent implements OnInit {

  public state : number = 0; // 0 = hide , 1 = edit , 2 = new
  public title : string = "";
  public btnText : string = "";

  public displayedColumns: string[] = ['Nro', 'name', 'edit', 'delete'];
  public dataSource;

  public clothes : Clothe;
  private clotheId : number;

  public typeMeasureSelected : TypeMeasure;

  constructor(
    private clothesService : ClothesService,
    private route : ActivatedRoute,
    private typeMeasureService : TypeMeasureService
  ) { }

  ngOnInit() {
    this.clotheId = this.getClotheId();
    this.findAllMeasuresByClothesId(this.clotheId);
  }

  private findAllMeasuresByClothesId(id : number) {
    this.clothesService.findClothesById(id)
      .subscribe(
        data => {
          this.clothes = data;
          console.log(data);
          this.dataSource = this.insertPositions(this.filterByEliminated(this.clothes.typeMeasureSet));
          // this.changeDetectorRef.detectChanges();
        }
      )
  }

  private getClotheId() : number {
    let id : number = +this.route.snapshot.paramMap.get("id");
    return id;
  }

  private filterByEliminated(typeMeasureSet : TypeMeasure[]) : TypeMeasure[] {
    return typeMeasureSet = typeMeasureSet.filter(t => t.eliminated == "0");
  }

  private insertPositions(typeMeasureSet : TypeMeasure[]) : TypeMeasure[] {
    let i : number = 0;
    for(let c of typeMeasureSet){ 
      c.position = ++i;
    }
    return typeMeasureSet;
  }

  public edit(element : any) {
    this.typeMeasureSelected = {
      id : element.id,
      name : element.name,
      eliminated : "0"
    }
    this.state = 1;
    this.title = "Editar Elemento";
    this.btnText = "Modificar";
  }

  public delete(id : number) {
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
        this.typeMeasureService.deleteById(id)
        .subscribe(
          () => { 
            this.findAllMeasuresByClothesId(this.clotheId);
          }
      );
      }
      
    })
    // this.clothesService.deleteClothesById(id)
    //   .subscribe(
    //     () => this.findAllClothes()
    //   );
  }

  public new() {
    this.cleanTypeMeasureSelected();
    this.state = 2;
    this.title = "Nuevo Elemento";
    this.btnText = "Guardar";
  }

  public cancel() {
    this.state = 0;
    this.cleanTypeMeasureSelected();
  }

  public accept() {

    this.typeMeasureSelected.name = this.typeMeasureSelected.name.trim();

    if (this.typeMeasureSelected.name == "") {
      swal({
        title : "",
        html : "<h4> Existen campos vacios </h4>",
        confirmButtonColor: '#303F9F',
      });

      return;
    }


    if (this.state == 1) {
      this.typeMeasureService.update(this.typeMeasureSelected.id, this.typeMeasureSelected)
        .subscribe(
          () => this.findAllMeasuresByClothesId(this.clotheId)
        );
        this.state = 0;
    } else if (this.state == 2){
      this.typeMeasureSelected.clothes = this.clothes;
      this.typeMeasureService.save(this.typeMeasureSelected)
        .subscribe(
          () => this.findAllMeasuresByClothesId(this.clotheId)
        );
      this.state = 0;
      
    }
  }

  public log(message : string) {
    console.log(message);
  }

  public cleanTypeMeasureSelected() {
    this.typeMeasureSelected = {
      id : 0,
      name : '',
      clothes : null
    }
  }

}
