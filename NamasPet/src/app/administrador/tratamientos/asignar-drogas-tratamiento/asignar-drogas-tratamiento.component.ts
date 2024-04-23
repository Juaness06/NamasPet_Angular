import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Droga } from 'src/app/model/droga';
import { DrogaService } from 'src/app/service/droga.service';
import { TratamientoService } from 'src/app/service/tratamientos.service';

@Component({
  selector: 'app-asignar-drogas-tratamiento',
  templateUrl: './asignar-drogas-tratamiento.component.html',
  styleUrls: ['./asignar-drogas-tratamiento.component.css']
})
export class AsignarDrogasTratamientoComponent implements OnInit {
  drogasList: Droga[] = [];
  selectedDroga = new FormControl();  // Usamos FormControl aquí para una mejor gestión y validación

  constructor(private drogaService: DrogaService, private tratamientoService: TratamientoService) {}

  ngOnInit(): void {
    this.drogaService.findAll().subscribe(drogas => {
      this.drogasList = drogas;
    });
  }

  asignarDroga() {
    const tratamientoId = 1; // Esto debería obtenerse de alguna manera, como de un parámetro de ruta o selección del usuario
  
    // Llama a un servicio que asigna la droga al tratamiento
    this.tratamientoService.agregarDrogaATratamiento(tratamientoId, this.selectedDroga.value).subscribe({
      next: () => {
        console.log('Droga asignada con éxito');
        alert('Droga asignada con éxito!');
      },
      error: (error) => {
        console.error('Error al asignar la droga:', error);
        alert('Error al asignar la droga. Vea la consola para más detalles.');
      }
    });
  }
  
}
