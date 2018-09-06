import { Component, OnInit } from '@angular/core';
import { Clothe } from '../../../../shared/models/Clothe';
import { ClothesService } from '../../../../shared/services/clothes.service';
import { Router } from '@angular/router';

declare var swal : any;

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  public clothes : Clothe[];

  public state : number = 0; // 0 = hide , 1 = edit , 2 = new
  public title : string = "";
  public btnText : string = "";

  public displayedColumns: string[] = ['Nro', 'name', 'edit','measures', 'delete'];
  public dataSource;

  public clothesSelected : Clothe;

  constructor(
    private clothesService : ClothesService,
    private router : Router) { }

  ngOnInit() {
    // this.clothes = this.clothesService.findAllClothes();
    this.findAllClothes();
  }

  private findAllClothes() {
    this.clothesService.findAllClothes()
      .subscribe(
        data => {
          this.clothes = data;
          console.log(data);
          this.dataSource = this.insertPositions();
          // this.changeDetectorRef.detectChanges();
        }
      )
  }

  private insertPositions() : Clothe[] {
    let i : number = 0;
    for(let c of this.clothes){ 
      c.position = ++i;
    }
    return this.clothes;
  }

  public edit(element : any) {
    this.clothesSelected = {
      id : element.id,
      name : element.name
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
        this.clothesService.deleteClothesById(id)
        .subscribe(
          () => { 
            this.findAllClothes();
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
    this.cleanClothesSelected();
    this.state = 2;
    this.title = "Nuevo Elemento";
    this.btnText = "Guardar";
  }

  public cancel() {
    this.state = 0;
    this.cleanClothesSelected();
  }

  public accept() {

    this.clothesSelected.name = this.clothesSelected.name.trim();

    if (this.clothesSelected.name == "") {
      swal({
        title : "",
        html : "<h4> Existen campos vacios </h4>",
        confirmButtonColor: '#303F9F',
      });

      return;
    }


    if (this.state == 1) {
      this.clothesService.updateClothes(this.clothesSelected.id, this.clothesSelected)
        .subscribe(
          () => this.findAllClothes()
        );
        this.state = 0;
    } else if (this.state == 2){
      this.clothesService.saveClothes(this.clothesSelected)
        .subscribe(
          () => this.findAllClothes()
        );
      this.state = 0;
      
    }
  }

  public log(message : string) {
    console.log(message);
  }

  public cleanClothesSelected() {
    this.clothesSelected = {
      id : 0,
      name : ''
    }
  }

  public goToMeasuresOfClothes(id : number) {
    this.router.navigateByUrl("/ropa/" + id + "/medidas")
  }

}
