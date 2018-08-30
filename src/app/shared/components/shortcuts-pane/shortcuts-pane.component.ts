import { Component, OnInit, Input } from '@angular/core';
import { ShortCutActivityPane } from '../../../shared/models/ShortCutActivityPane';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-shortcuts-pane',
  templateUrl: './shortcuts-pane.component.html',
  styleUrls: ['./shortcuts-pane.component.css']
})
export class ShortcutsPaneComponent implements OnInit {

  @Input()
  public data : ShortCutActivityPane;

  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
  }

  public onClick() {
    // this.router.navigate(['./' + this.data.detailUrl], { relativeTo : this.route})
    this.router.navigateByUrl(this.data.detailUrl);
  }

}
