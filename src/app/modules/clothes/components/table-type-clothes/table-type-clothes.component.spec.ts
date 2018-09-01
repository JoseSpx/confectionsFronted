import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTypeClothesComponent } from './table-type-clothes.component';

describe('TableTypeClothesComponent', () => {
  let component: TableTypeClothesComponent;
  let fixture: ComponentFixture<TableTypeClothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTypeClothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTypeClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
