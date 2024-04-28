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
  seleccionarMascota?: Mascota;

  constructor(private mascotaService: MascotaService, private router: Router) {}

  ngOnInit(): void {
    this.mascotaService.findAll().subscribe((mascotas) => (this.mascotasList = mascotas));
    console.log('Numero de mascotas:' + this.mascotasList.length);
  }

  mostrarMascota(mascotaId: number): void {
    this.router.navigate(['/mascotas', mascotaId]); // Navega a la página de detalles de la mascota
  }

}
