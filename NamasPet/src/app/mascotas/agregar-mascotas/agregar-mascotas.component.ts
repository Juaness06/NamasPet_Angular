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
    id: 0, // Asume que el ID se genera en el backend
    nombre: '',
    raza: '',
    edad: 0,
    peso: 0.0,
    actividad: false, // O 'false', según lo que necesites
    imagen: '',
    cliente: undefined, // Temporal, según comentas
    numeroAtenciones: 0
  };

  registrarFormMascota() {
    console.log(this.formMascota);
    this.sendMascota = Object.assign({},this.formMascota);

    //this.addMascotaEvent.emit(this.sendMascota);

    this.mascotaService.agregarMascota(this.formMascota);
    this.router.navigate(['/mascotas/all']);

  }

  registrarMascota(): void {
    console.log(this.formMascota);
    this.sendMascota = Object.assign({},this.formMascota);

    this.addMascotaEvent.emit(this.sendMascota);
  }
}
