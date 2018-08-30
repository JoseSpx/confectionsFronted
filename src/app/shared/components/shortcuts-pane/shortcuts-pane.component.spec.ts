import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutsPaneComponent } from './shortcuts-pane.component';

describe('ShortcutsPaneComponent', () => {
  let component: ShortcutsPaneComponent;
  let fixture: ComponentFixture<ShortcutsPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortcutsPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcutsPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
