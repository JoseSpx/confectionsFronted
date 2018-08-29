import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [
    NavbarComponent,
    SidebarComponent
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
