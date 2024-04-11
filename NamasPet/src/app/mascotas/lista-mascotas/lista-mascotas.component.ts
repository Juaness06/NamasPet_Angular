import { Component, OnInit } from '@angular/core';
import { Mascota } from '../mascota';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent implements OnInit {
  mostrarForm: boolean = false;
  mascotasList: Mascota[] = []; 
  seleccionarMascota?: Mascota;  
  
  constructor(private mascotaService: MascotaService) {}

  ngOnInit(): void {
     this.mascotaService.findAll().subscribe(
      mascotas => this.mascotasList = mascotas
     );
    console.log("Numero de mascotas:" + this.mascotasList.length);
  }

  mostrarMascota(mascota: Mascota): void {
    this.seleccionarMascota = mascota; // Assign the pet to the property
  }

  agregarMascota(mascota: Mascota): void {
    this.mascotasList.push(mascota);
    this.mascotaService.agregarMascota(mascota);
  }

  eliminarMascota(mascota: Mascota): void {
    this.mascotasList = this.mascotasList.filter(m => m !== mascota);
    this.mascotaService.eliminarMascota(mascota.id);

  }

  mostrarFormulario(): void {
    this.mostrarForm = true;
  }


  ocultarFormulario(): void {
    this.mostrarForm = false;
  }
}
