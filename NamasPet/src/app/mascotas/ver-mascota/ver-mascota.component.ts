import { Component, inject,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from 'src/app/service/mascota.service';
import { Mascota } from '../mascota';
import { HttpClient } from '@angular/common/http';
import { CLienteService } from 'src/app/service/cliente.service';
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
  private clienteService: CLienteService
) {}
ngOnInit(): void {
  console.log("ngoninit de mostrar");
 this.route.paramMap.subscribe(params => {
   const id = Number(params.get('id'));
   this.mascotaService.findById(id).pipe(
    mergeMap(
      (mascotainform) => {
        this.mascota = mascotainform;
        return this.clienteService.findById(this.cliente.cedula);
      }
    )
   ).subscribe(
    (cliente) => {
      this.mascota.cliente = cliente;
    }
   )
 })
  };
}
ngochanges(): void {
  console.log("ngonchanges");

};


