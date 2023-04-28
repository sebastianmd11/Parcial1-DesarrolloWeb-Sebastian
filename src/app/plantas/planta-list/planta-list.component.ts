import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantasService } from '../plantas.service';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent implements OnInit {

  plantas: Array<Planta> = [];
  plantasExterior:number = 0;
  plantasInterior:number = 0;

  constructor(private plantaService: PlantasService) { }

  getPlantas(): void{
    this.plantaService.getPlantas().subscribe((plantas)=>{
      this.plantas = plantas;
      for( let planta of plantas){
        if (planta.tipo === "Exterior"){
          this.plantasExterior++;
        }else if (planta.tipo === "Interior"){
          this.plantasInterior++;
        }
      }

    });
  }

  ngOnInit() {
    this.getPlantas();
  }

}
