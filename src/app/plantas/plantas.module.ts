import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantasComponent } from './plantas.component';
import { PlantaListComponent } from './planta-list/planta-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlantasComponent,PlantaListComponent],
  exports: [PlantasComponent,PlantaListComponent]
})
export class PlantasModule { }
