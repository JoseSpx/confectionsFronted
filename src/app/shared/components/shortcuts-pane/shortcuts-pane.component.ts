import { Component, OnInit, Input } from '@angular/core';
import { ShortCutActivityPane } from '../../../shared/models/ShortCutActivityPane';

@Component({
  selector: 'app-shortcuts-pane',
  templateUrl: './shortcuts-pane.component.html',
  styleUrls: ['./shortcuts-pane.component.css']
})
export class ShortcutsPaneComponent implements OnInit {

  @Input()
  public data : ShortCutActivityPane;

  constructor() { }

  ngOnInit() {
  }

}
