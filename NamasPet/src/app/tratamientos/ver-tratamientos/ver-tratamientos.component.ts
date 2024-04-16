import { Component } from '@angular/core';
import { Tratamiento } from '../tratamiento';
import { TratamientoService } from 'src/app/service/tratamnientos.service';

@Component({
  selector: 'app-ver-tratamientos',
  templateUrl: './ver-tratamientos.component.html',
  styleUrls: ['./ver-tratamientos.component.css']
})
export class VerTratamientosComponent {
  mostrarForm: boolean = false;
  mascotasList: Tratamiento[] = [];
  seleccionarMascota?: Tratamiento;

  constructor(private mascotaService: TratamientoService) {}

  ngOnInit(): void {
    this.mascotaService.findAll().subscribe((mascotas) => (this.mascotasList = mascotas));
    console.log('Numero de mascotas:' + this.mascotasList.length);
  }

  mostrarMascota(mascota: Tratamiento): void {
    this.seleccionarMascota = mascota; // Assign the pet to the property
  }


  mostrarFormulario(): void {
    this.mostrarForm = true;
  }

  ocultarFormulario(): void {
    this.mostrarForm = false;
  }
}
