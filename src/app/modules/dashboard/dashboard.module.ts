import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoldPipe } from '../../shared/pipes/bold.pipe';
import { ComponentsModule } from '../../shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ComponentsModule
  ],
  declarations: [
    DashboardComponent,
    BoldPipe
  ],
  exports : [
    DashboardComponent
  ]
})
export class DashboardModule { }
