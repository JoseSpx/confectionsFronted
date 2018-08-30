import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ShortcutsPaneComponent } from './shortcuts-pane/shortcuts-pane.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  exports : [
    NavbarComponent,
    SidebarComponent,
    ShortcutsPaneComponent
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ShortcutsPaneComponent
  ]
})
export class ComponentsModule { }
