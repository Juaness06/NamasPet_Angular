import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Droga } from 'src/app/model/droga';
import { TratamientoService } from 'src/app/service/tratamientos.service';

@Component({
  selector: 'app-drogas-tratamiento',
  templateUrl: './drogas-tratamiento.component.html',
  styleUrls: ['./drogas-tratamiento.component.css']
})
export class DrogasTratamientoComponent implements OnInit {
  seleccionarMedicamento?: Droga;

  constructor(
    private tratamientoService: TratamientoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.tratamientoService.DrogadelTratamiento(id).subscribe(
          (droga: Droga) => {  // Ajustado para manejar un solo objeto Droga
            this.seleccionarMedicamento = droga;
          },
          error => {
            console.error('Error al obtener la droga del tratamiento:', error);
          }
        );
      }
    });
  }
}
