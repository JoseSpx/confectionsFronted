import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'confectionsFrontend';


  public toogleBody(value : any) {
    let el = document.getElementById("main-body");
    el.classList.toggle("main-body--full");
  }

}
