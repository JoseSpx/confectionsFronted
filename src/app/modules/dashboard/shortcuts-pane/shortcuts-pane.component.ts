import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shortcuts-pane',
  templateUrl: './shortcuts-pane.component.html',
  styleUrls: ['./shortcuts-pane.component.css']
})
export class ShortcutsPaneComponent implements OnInit {

  @Input()
  public title : string;
  @Input()
  public imageUrl : string;
  @Input()
  public subtitle : string;
  @Input()
  public detailUrl : string;

  constructor() { }

  ngOnInit() {
  }

}
