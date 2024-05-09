import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Mascota } from '../../../model/mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import { Subscription } from 'rxjs';
import { EstadoUiService } from 'src/app/service/estados.service';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css'],
})
export class ListaMascotasComponent implements OnInit, OnDestroy {
  @Input() mostrarEstilosEspeciales: boolean = false;

  mostrarForm: boolean = false;
  mascotasList: Mascota[] = [];
  seleccionarMascota?: Mascota;
  private subs = new Subscription();

  constructor(private mascotaService: MascotaService, private estadoUiService: EstadoUiService) {}

  ngOnInit(): void {
    this.mascotaService.findAll().subscribe((mascotas) => {
      this.mascotasList = mascotas;
      console.log('Numero de mascotas:' + this.mascotasList.length);
    });

    
    this.subs.add(
      this.estadoUiService.mostrarListaMascotas$.subscribe(
        estado => this.mostrarEstilosEspeciales = estado
      )
    );
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

  mostrarFormulario(): void {
    this.mostrarForm = true;
  }

  ocultarFormulario(): void {
    this.mostrarForm = false;
  }

  ngOnDestroy(): void {
    // Asegúrate de desuscribirte para evitar fugas de memoria
    this.subs.unsubscribe();
  }
}
