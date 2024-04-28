import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from 'src/app/model/mascota';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-administrador-ver-mascota',
  templateUrl: './administrador-ver-mascota.component.html',
  styleUrls: ['./administrador-ver-mascota.component.css'],
})
export class AdministradorVerMascotaComponent {
  @Input()
  mascota!: Mascota;

  constructor(
    private mascotaService: MascotaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.mascotaService.findById(id).subscribe(
        (mascotaInformacion) => {
          // Aquí, mascotaInformacion incluye todos los datos de la mascota,
          // incluido el objeto cliente, como se define en tu interfaz.
          this.mascota = mascotaInformacion;
          console.log(this.mascota);
        },
        (error) => {
          console.error('Error al buscar la mascota:', error);
        }
      );
    });
  }
}
