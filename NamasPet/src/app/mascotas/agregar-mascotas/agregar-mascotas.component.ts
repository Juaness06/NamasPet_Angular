import { Component, EventEmitter, Output } from '@angular/core';
import { Mascota } from '../mascota';

@Component({
  selector: 'app-agregar-mascotas',
  templateUrl: './agregar-mascotas.component.html',
  styleUrls: ['./agregar-mascotas.component.css']
})
export class AgregarMascotasComponent {
  @Output() addMascotaEvent = new EventEmitter<Mascota>();
  @Output() ocultarFormularioEvent = new EventEmitter<boolean>();

  formMascota: Mascota = {
    id: 0, // Asume que el ID se genera en el backend
    nombre: '',
    raza: '',
    edad: 0,
    peso: 0.0,
    actividad: true, // O 'false', según lo que necesites
    imagen: '',


    cliente: 0, // Temporal, según comentas


    numeroAtenciones: 0
  };

  registrarMascota(): void {
    console.log(this.formMascota);
    // No necesitas asignar a una nueva variable, puedes emitir directamente formMascota
    this.addMascotaEvent.emit({...this.formMascota}); // Usar el spread operator para clonar el objeto
  }

  cancelar(): void {
    this.ocultarFormularioEvent.emit(false);
  }
}
