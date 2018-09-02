import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMeasuresTableComponent } from './client-measures-table.component';

describe('ClientMeasuresTableComponent', () => {
  let component: ClientMeasuresTableComponent;
  let fixture: ComponentFixture<ClientMeasuresTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientMeasuresTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientMeasuresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
