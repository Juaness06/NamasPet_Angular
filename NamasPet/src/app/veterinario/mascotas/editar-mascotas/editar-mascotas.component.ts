import { Component, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from 'src/app/service/mascota.service';
import { Mascota } from '../../../model/mascota';
import { Cliente } from 'src/app/model/Cliente';

@Component({
  selector: 'app-editar-mascotas',
  templateUrl: './editar-mascotas.component.html',
  styleUrls: ['./editar-mascotas.component.css'],
})
export class EditarMascotasComponent {
  constructor(
    private mascotaService: MascotaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @Output()
  addMascotaEvent = new EventEmitter<Mascota>();

  sendMascota!: Mascota;
  buscarMascota!: Mascota;
  buscarCliente!: Cliente;
  formMascota: Mascota = {
    id: 0,
    imagen: '',
    nombre: '',
    raza: '',
    edad: 0,
    actividad: false,
    peso: 0.0,
    numeroAtenciones: 0,
    cedulaCliente: 0,
    // Agrega otros campos necesarios
  };
  formCliente: Cliente = {
    cedula: 0,
    nombre: '',
    correo: '',
    celular: 0,
    contrasena: '',
    usuario: '',
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      if (id) {
        this.mascotaService.findById(id).subscribe(
          (mascotaInformacion) => {
            this.formMascota = { ...mascotaInformacion };
            // Suponiendo que el cliente está vinculado en la información de la mascota
            this.formCliente = mascotaInformacion.cliente || this.formCliente;
          },
          (error) => {
            console.error('Error al buscar la mascota:', error);
            // Manejo adecuado del error, posiblemente reasignando a valores por defecto o mostrando un mensaje al usuario.
          }
        );
      }
    });
  }

  actualizarMascota() {
    if (!this.formCliente) {
      console.error('Cliente no está definido');
      return;
    }

    this.sendMascota = Object.assign({}, this.formMascota);
    this.mascotaService
      .editarMascota(this.sendMascota, this.formCliente.cedula)
      .subscribe((mascotaInformacion) => {
        this.router.navigate(['mascotas/all']);
      });
  }
}
