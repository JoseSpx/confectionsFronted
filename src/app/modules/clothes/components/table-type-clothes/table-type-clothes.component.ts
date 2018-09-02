import { Component, OnInit } from '@angular/core';
import { CLOTHES } from '../../../../shared/mocks/clothes';
import { Clothe } from '../../../../shared/models/Clothe';


@Component({
  selector: 'app-table-type-clothes',
  templateUrl: './table-type-clothes.component.html',
  styleUrls: ['./table-type-clothes.component.css']
})
export class TableTypeClothesComponent implements OnInit {

  public displayedColumns: string[] = ['Nro', 'name', 'edit', 'delete'];
  public dataSource = CLOTHES;

  public clothesSelected : Clothe;
  public 

  constructor() { }

  ngOnInit() {
    this.dataSource = this.insertPositions();
  }

  private insertPositions() : Clothe[] {
    let i : number = 0;
    for(let c of CLOTHES){ 
      c.position = ++i;
    }
    return CLOTHES;
  }

}
