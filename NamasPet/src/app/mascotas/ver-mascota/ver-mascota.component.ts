import { Component, inject,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from 'src/app/service/mascota.service';
import { Mascota } from '../mascota';
import { HttpClient } from '@angular/common/http';
import { ClienteService } from 'src/app/service/cliente.service';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-ver-mascota',
  templateUrl: './ver-mascota.component.html',
  styleUrls: ['./ver-mascota.component.css']
})
export class VerMascotaComponent {
@Input()
mascota!: Mascota;

constructor(
  private mascotaService: MascotaService,
  private route: ActivatedRoute,
  private router: Router,
  private http: HttpClient,
  private clienteService: ClienteService
) {}
ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id = Number(params.get('id'));
    this.mascotaService.findById(id).subscribe(
      (mascotaInformacion) => {
        // Aquí, mascotaInformacion incluye todos los datos de la mascota,
        // incluido el objeto cliente, como se define en tu interfaz.
        this.mascota = mascotaInformacion;
        console.log(this.mascota);
      },
      error => {
        console.error('Error al buscar la mascota:', error);
      }
    );
  });
}

  ;
  ngochanges(): void {
    console.log("ngonchanges");
  
  };
}




