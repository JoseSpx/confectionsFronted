import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMeasuresComponent } from './client-measures.component';

describe('ClientMeasuresComponent', () => {
  let component: ClientMeasuresComponent;
  let fixture: ComponentFixture<ClientMeasuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientMeasuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
