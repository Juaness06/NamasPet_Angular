import { Component } from '@angular/core';
import { Mascota } from 'src/app/model/mascota';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-administrador-lista-mascotas',
  templateUrl: './administrador-lista-mascotas.component.html',
  styleUrls: ['./administrador-lista-mascotas.component.css']
})
export class AdministradorListaMascotasComponent {

  mascotasList: Mascota[] = [];
  seleccionarMascota?: Mascota;

  constructor(private mascotaService: MascotaService) {}

  ngOnInit(): void {
    this.mascotaService.findAll().subscribe((mascotas) => {
      this.mascotasList = mascotas;
      console.log('Numero de mascotas:' + this.mascotasList.length);
    });
  }

  mostrarMascota(mascota: Mascota): void {
    this.seleccionarMascota = mascota; // Assign the pet to the property
  }

  eliminarMascota(mascota: Mascota): void {
    
    this.mascotaService.eliminarMascota(mascota.id);
    alert(mascota.nombre + ' cambio de estado');
    //recorgar la pagina
    window.location.reload();
  }

}
