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
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarMaterialComponent } from './navbar-material/navbar-material.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressBarModule
  ],
  exports : [
    NavbarComponent,
    SidebarComponent,
    ShortcutsPaneComponent,
    ButtonBackComponent,
    NavbarMaterialComponent,
    ProgressBarComponent
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    ShortcutsPaneComponent,
    ButtonBackComponent,
    NavbarMaterialComponent,
    ProgressBarComponent
  ]
})
export class ComponentsModule { }
