import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { TableTypeClothesComponent } from './components/table-type-clothes/table-type-clothes.component';
import { MatIconModule, MatCardModule } from '@angular/material';
import { ComponentsModule } from '../../shared/components/components.module';
import { FormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { ClothesService } from '../../shared/services/clothes.service';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    ComponentsModule,
    MatCardModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [
    MainDashboardComponent,
    TableTypeClothesComponent
  ],
  providers : [
    ClothesService
  ]
})
export class ClothesModule { }
