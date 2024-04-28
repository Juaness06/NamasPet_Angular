import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { Mascota } from 'src/app/model/mascota';
import { ClienteService } from 'src/app/service/cliente.service';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-administrador-agregar-mascota',
  templateUrl: './administrador-agregar-mascota.component.html',
  styleUrls: ['./administrador-agregar-mascota.component.css']
})
export class AdministradorAgregarMascotaComponent {

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

  formCliente: Cliente = {
    cedula: 0,
    nombre: '',
    correo: '',
    celular: 0,
    contrasena: '',
    usuario: '',
  };

  registrarFormMascota() {
    console.log(this.formMascota);
    if (this.clienteService.findById(this.formCliente.cedula) != null) {
      this.sendMascota = Object.assign({}, this.formMascota);
      this.sendCliente = Object.assign({}, this.formCliente);
      this.mascotaService.agregarMascota(this.sendMascota,this.formCliente.cedula); 
      this.router.navigate(['/admin/mascotas/all']);
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
