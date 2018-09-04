import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output()
  public outputToogleMenu : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public toogleSideBar() {
    let el = document.getElementById("side-nav");
    el.classList.toggle("side-nav--hide");
    this.outputToogleMenu.emit("toogle-body");
  }

}
