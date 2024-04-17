import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { TratamientoService } from 'src/app/service/tratamientos.service';
import { Tratamiento } from '../../../model/tratamiento';

@Component({
  selector: 'app-informacion-tratamientos',
  templateUrl: './informacion-tratamientos.component.html',
  styleUrls: ['./informacion-tratamientos.component.css']
})
export class InformacionTratamientosComponent {
  tratamiento!: Tratamiento;

  constructor(
    private tratamientoService: TratamientoService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.tratamientoService.findById(id).subscribe(
        (TratamientoInformacion) => {
          // Aquí, mascotaInformacion incluye todos los datos de la mascota,
          // incluido el objeto cliente, como se define en tu interfaz.
          this.tratamiento = TratamientoInformacion;
          console.log(this.tratamiento);
        },
        error => {
          console.error('Error al buscar la mascota:', error);
        }
      );
    });
  }
}
