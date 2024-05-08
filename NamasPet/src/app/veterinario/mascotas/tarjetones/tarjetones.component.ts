import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../../model/mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetones',
  templateUrl: './tarjetones.component.html',
  styleUrls: ['./tarjetones.component.css'],
})
export class TarjetonesComponent implements OnInit {
  
  mascotasList: Mascota[] = [];
  mascotasFiltradas: Mascota[] = [];
  seleccionarMascota?: Mascota;
  filtro: string = '';

  constructor(private mascotaService: MascotaService, private router: Router) {}

  ngOnInit(): void {
    this.mascotaService.findAll().subscribe((mascotas) => {
      this.mascotasList = mascotas;
      this.mascotasFiltradas = mascotas; // Asegúrate de asignar también a mascotasFiltradas
      console.log('Numero de mascotas:', this.mascotasList.length);
    }, error => {
      console.error('Error al cargar las mascotas:', error);
    });
  }

  mostrarMascota(mascotaId: number): void {
    this.router.navigate(['/mascotas', mascotaId]); // Navega a la página de detalles de la mascota
  }

  filtrarMascotas(): void {
    if (this.filtro) {
      this.mascotasFiltradas = this.mascotasList.filter(mascota =>
        mascota.nombre.toLowerCase().includes(this.filtro.toLowerCase())
      );
    } else {
      this.mascotasFiltradas = this.mascotasList;
    }
  }

}
