import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ShortcutsPaneComponent } from './shortcuts-pane/shortcuts-pane.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonBackComponent } from './button-back/button-back.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  exports : [
    NavbarComponent,
    SidebarComponent,
    ShortcutsPaneComponent,
    ButtonBackComponent
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ShortcutsPaneComponent,
    ButtonBackComponent
  ]
})
export class ComponentsModule { }
