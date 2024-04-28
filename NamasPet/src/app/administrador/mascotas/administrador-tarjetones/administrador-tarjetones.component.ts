import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/model/mascota';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-administrador-tarjetones',
  templateUrl: './administrador-tarjetones.component.html',
  styleUrls: ['./administrador-tarjetones.component.css'],
})
export class AdministradorTarjetonesComponent implements OnInit {
  
  mascotasList: Mascota[] = [];
  seleccionarMascota?: Mascota;

  constructor(private mascotaService: MascotaService, private router: Router) {}

  ngOnInit(): void {
    this.mascotaService.findAll().subscribe((mascotas) => (this.mascotasList = mascotas));
    console.log('Numero de mascotas:' + this.mascotasList.length);
  }

  mostrarMascota(mascotaId: number): void {
    this.router.navigate(['/admin/mascotas', mascotaId]); // Navega a la página de detalles de la mascota
  }

}
