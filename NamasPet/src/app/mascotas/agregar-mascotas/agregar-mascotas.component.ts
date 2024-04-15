import { Component, EventEmitter, Output } from '@angular/core';
import { Mascota } from '../mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/clientes/Cliente';

@Component({
  selector: 'app-agregar-mascotas',
  templateUrl: './agregar-mascotas.component.html',
  styleUrls: ['./agregar-mascotas.component.css'],
})
export class AgregarMascotasComponent {
  constructor(
    private mascotaService: MascotaService,
    private router: Router,
    private clienteService: ClienteService
  ) {}

  @Output()
  addMascotaEvent = new EventEmitter<Mascota>();

  sendMascota!: Mascota;
  sendCliente!: Cliente;

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
    cliente: {
      cedula: 0,
      nombre: '',
      correo: '',
      celular: 0,
      contrasena: '',
      usuario: '',
    },
  };

  registrarFormMascota() {
    console.log(this.formMascota);
    if (this.clienteService.findById(this.formMascota.cedulaCliente) != null) {
      this.formMascota.cliente!.cedula! = this.formMascota.cedulaCliente;
      this.sendMascota = Object.assign({}, this.formMascota);
      this.mascotaService.agregarMascota(this.formMascota);
      this.router.navigate(['/mascotas/all']);
    } else {
      console.log('El cliente no existe');
    }
  }

  registrarMascota(): void {
    console.log(this.formMascota);
    this.sendMascota = Object.assign({}, this.formMascota);

    this.addMascotaEvent.emit(this.sendMascota);
  }
}
