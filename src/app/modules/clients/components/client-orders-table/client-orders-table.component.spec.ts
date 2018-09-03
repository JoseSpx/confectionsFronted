import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOrdersTableComponent } from './client-orders-table.component';

describe('ClientOrdersTableComponent', () => {
  let component: ClientOrdersTableComponent;
  let fixture: ComponentFixture<ClientOrdersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientOrdersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientOrdersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
