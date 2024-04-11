import { Component, EventEmitter, Output } from '@angular/core';
import { Mascota } from '../mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-mascotas',
  templateUrl: './agregar-mascotas.component.html',
  styleUrls: ['./agregar-mascotas.component.css']
})
export class AgregarMascotasComponent {

  constructor(
    private mascotaService: MascotaService,
    private router: Router
  ) { }

  @Output() 
  addMascotaEvent = new EventEmitter<Mascota>();
  
  sendMascota!:Mascota;

  formMascota: Mascota = {
    id: 0,
    imagen: '',
    nombre: '',
    raza: '',
    edad: 0,
    actividad: false,
    peso: 0.0,
    numeroAtenciones: 0,
    cliente: {
      cedula: 0,
      nombre: "",
      correo: "",
      celular: 0,
      contrasena: "",
      usuario: ""
    }
};


registrarFormMascota() {
  if (!this.formMascota.cliente) {
      console.error('Cliente information is missing');
      return;
  }
  console.log(this.formMascota);
  this.sendMascota = Object.assign({}, this.formMascota);

  this.mascotaService.agregarMascota(this.formMascota);
  this.router.navigate(['/mascotas/all']);
}

  registrarMascota(): void {
    console.log(this.formMascota);
    this.sendMascota = Object.assign({},this.formMascota);

    this.addMascotaEvent.emit(this.sendMascota);
  }
}
