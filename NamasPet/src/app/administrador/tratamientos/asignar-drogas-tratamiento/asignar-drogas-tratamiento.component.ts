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
    const tratamientoId = 1;  // Asegúrate de que esto sea obtenido correctamente
    const drogaId = Number(this.selectedDroga.value);  // Convierte el valor a número
  
    // Añadir más validaciones aquí
    if (!isNaN(drogaId) && drogaId != null && drogaId > 0) {  // Asegurarse de que el ID sea positivo
      this.tratamientoService.agregarDrogaATratamiento(tratamientoId, drogaId).subscribe({
        next: () => {
          console.log('Droga asignada con éxito');
          alert('Droga asignada con éxito!');
        },
        error: (error) => {
          console.error('Error al asignar la droga:', error);
          alert('Error al asignar la droga. Vea la consola para más detalles.');
        }
      });
    } else {
      console.error('Selected drug ID:', this.selectedDroga.value);  // Mostrar valor incorrecto
      alert('Por favor, selecciona una droga válida antes de asignar.');
    }
  }
}
