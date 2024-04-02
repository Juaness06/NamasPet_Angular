import { Component, EventEmitter, Output } from '@angular/core';
import { Mascota } from '../mascota';

@Component({
  selector: 'app-agregar-mascotas',
  templateUrl: './agregar-mascotas.component.html',
  styleUrls: ['./agregar-mascotas.component.css']
})
export class AgregarMascotasComponent {
  @Output() 
  addMascotaEvent = new EventEmitter<Mascota>();

  @Output() 
  ocultarFormularioEvent = new EventEmitter<boolean>();
  
  sendMascota!:Mascota;

  formMascota: Mascota = {
    id: 0, // Asume que el ID se genera en el backend
    nombre: '',
    raza: '',
    edad: 0,
    peso: 0.0,
    actividad: false, // O 'false', según lo que necesites
    imagen: '',


    dueno: 0, // Temporal, según comentas


    numeroAtenciones: 0
  };

  registrarFormMascota() {
    console.log(this.formMascota);
    this.sendMascota = Object.assign({},this.formMascota);

    this.addMascotaEvent.emit(this.sendMascota);
  }

  registrarMascota(form: any): void {
    console.log(this.formMascota);
    this.sendMascota = Object.assign({},this.formMascota);

    this.addMascotaEvent.emit(this.sendMascota);
  }
  
}
