import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/model/mascota';
import { Tratamiento } from 'src/app/model/tratamiento';
import { AdministradorService } from 'src/app/service/administrador.service';
import { ClienteService } from 'src/app/service/cliente.service';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-historial-mascota',
  templateUrl: './historial-mascota.component.html',
  styleUrls: ['./historial-mascota.component.css']
})
export class HistorialMascotaComponent {

  @Input()
  mascota!: Mascota;
  tratamientosMascota: Tratamiento[] = [];
  seleccionarMedicamento?: Tratamiento;


  constructor(
    private mascotaService: MascotaService,
    private route: ActivatedRoute,
    private administradorService: AdministradorService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.mascotaService.findById(id).subscribe(
        (mascotaInformacion) => {
          this.mascota = mascotaInformacion;
          console.log(this.mascota);
  
          // Suscribirse al historial de tratamientos una vez que la mascota esté cargada
          this.administradorService.findHistorialPerro(this.mascota.id).subscribe(
            (tratamientos) => {
              this.tratamientosMascota = tratamientos;
              console.log('Este es el tratamiento', this.tratamientosMascota);
            },
            error => {
              console.error('Error al obtener el historial de tratamientos:', error);
            }
          );
  
        },
        error => {
          console.error('Error al buscar la mascota:', error);
        }
      );
    });
  }
  
}
