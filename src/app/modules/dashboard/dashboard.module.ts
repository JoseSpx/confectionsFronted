import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShortcutsPaneComponent } from './shortcuts-pane/shortcuts-pane.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  declarations: [
    DashboardComponent,
    ShortcutsPaneComponent
  ],
  exports : [
    DashboardComponent
  ]
})
export class DashboardModule { }
