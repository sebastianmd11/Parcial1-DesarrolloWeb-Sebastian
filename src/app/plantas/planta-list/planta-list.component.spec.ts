/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlantaListComponent } from './planta-list.component';
import { Planta } from '../planta';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;

    const plantas: Planta[] = [];

    let tipo = ["Exterior", "Interior"];


    for (let i = 0; i<3; i++){
      let eleccion = tipo[Math.floor(Math.random() * 2)];
      const planta = new Planta(
        i+1,
        faker.name.fullName(),
        faker.name.fullName(),
        eleccion,
        faker.datatype.number({max:150}),
        faker.lorem.word(),
        faker.lorem.word()
      );
        component.plantas.push(planta);
    }


    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 1 <tr class="header"> element', () => {
    expect(debug.queryAll(By.css('tr.header'))).toHaveSize(1)
  });

  it('should have 4 <tr> elements', () => {
    fixture.detectChanges(); // Actualiza la vista para que la tabla sea visible
    const tableRows = fixture.debugElement.queryAll(By.css('tr')); // Obtiene todos los elementos 'tr' de la tabla
    expect(tableRows.length).toBe(4); // Verifica que la tabla tenga exactamente 3 elementos 'tr'
  });
});
