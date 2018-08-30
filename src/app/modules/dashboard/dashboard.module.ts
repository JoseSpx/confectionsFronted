import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShortcutsPaneComponent } from './shortcuts-pane/shortcuts-pane.component';
import { MatCardModule } from '@angular/material/card';
import { BoldPipe } from '../../shared/pipes/bold.pipe';


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
    ShortcutsPaneComponent,
    BoldPipe
  ],
  exports : [
    DashboardComponent
  ]
})
export class DashboardModule { }
