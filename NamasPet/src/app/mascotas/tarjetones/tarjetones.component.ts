import { Component, OnInit } from '@angular/core';
import { Mascota } from '../mascota';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-tarjetones',
  templateUrl: './tarjetones.component.html',
  styleUrls: ['./tarjetones.component.css']
})
export class TarjetonesComponent implements OnInit {
  mostrarForm: boolean = false;
  mascotasList: Mascota[] = []; // Initialize the list
  seleccionarMascota?: Mascota;  // Make it optional
  
  constructor(private mascotaService: MascotaService) {}

  ngOnInit(): void {
    this.mascotasList = this.mascotaService.findAll();
  }

  mostrarMascota(mascota: Mascota): void {
    this.seleccionarMascota = mascota; // Assign the pet to the property
  }

  agregarMascota(mascota: Mascota): void {
    this.mascotasList.push(mascota);
  }

  eliminarMascota(mascota: Mascota): void {
    this.mascotasList = this.mascotasList.filter(m => m !== mascota); // Use filter for immutability
  }

  mostrarFormulario(): void {
    this.mostrarForm = true;
  }

  ocultarFormulario(): void {
    this.mostrarForm = false;
  }

}
