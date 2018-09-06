import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothesListMeasuresComponent } from './clothes-list-measures.component';

describe('ClothesListMeasuresComponent', () => {
  let component: ClothesListMeasuresComponent;
  let fixture: ComponentFixture<ClothesListMeasuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothesListMeasuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothesListMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
