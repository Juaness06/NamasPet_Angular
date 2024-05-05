import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; // Importa ActivatedRoute
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

  formAsignacion = {
    tratamientoId: 0,
    drogaId: 0
  };
  constructor(
    private drogaService: DrogaService,
    private tratamientoService: TratamientoService,
    private route: ActivatedRoute, // Inyecta ActivatedRoute
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtén el id del tratamiento de los parámetros de ruta
    this.route.paramMap.subscribe(params => {
      const tratamientoId1 = Number(params.get('id'));
      this.formAsignacion.tratamientoId = tratamientoId1;
     
      this.drogaService.findAll().subscribe(drogas => {
        this.drogasList = drogas;
      });
    });
  }

  asignarDroga(): void {
    this.drogaService.findById(this.formAsignacion.drogaId).subscribe(droga => {
      if (droga) {
        this.tratamientoService.agregarDrogaATratamiento(this.formAsignacion.tratamientoId, this.formAsignacion.drogaId);
        this.router.navigate(['/drogas/all'])
      } else {
        console.log('Droga no encontrada');
      }
    });
  }
  
  
}
