import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
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

  constructor(
    private drogaService: DrogaService,
    private tratamientoService: TratamientoService,
    private route: ActivatedRoute // Inyecta ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtén el id del tratamiento de los parámetros de ruta
    this.route.paramMap.subscribe(params => {
      const tratamientoId = Number(params.get('id'));
      // Utiliza el id para obtener las drogas o realizar otras acciones necesarias
      this.drogaService.findAll().subscribe(drogas => {
        this.drogasList = drogas;
      });
    });
  }

  asignarDroga() {
    const tratamientoId = Number(this.route.snapshot.paramMap.get('id'));
    const drogaId = Number(this.selectedDroga.value);
    console.log('Tratamiento ID:', tratamientoId, 'Droga ID:', drogaId);
  
    if (!isNaN(drogaId) && drogaId != null && drogaId > 0) {
      this.tratamientoService.agregarDrogaATratamiento(tratamientoId, drogaId).subscribe({
        next: (response) => {
          console.log('Respuesta del servidor:', response);
          alert('Droga asignada con éxito!');
        },
        error: (error) => {
          console.error('Error al asignar la droga:', error);
          alert('Error al asignar la droga. Vea la consola para más detalles.');
        }
      });
    } else {
      console.error('Selected drug ID:', this.selectedDroga.value);
      alert('Por favor, selecciona una droga válida antes de asignar.');
    }
  }
  
}
