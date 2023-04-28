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

  constructor(private plantaService: PlantasService) { }

  getPlantas(): void{
    this.plantaService.getPlantas().subscribe((plantas)=>{
      this.plantas = plantas;
    });
  }

  ngOnInit() {
    this.getPlantas();
  }

}
