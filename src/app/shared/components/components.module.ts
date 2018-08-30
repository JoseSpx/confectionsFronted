import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
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
