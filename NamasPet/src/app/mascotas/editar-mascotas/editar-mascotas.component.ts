import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MascotaService } from 'src/app/service/mascota.service';
import { Mascota } from '../mascota';

@Component({
  selector: 'app-editar-mascotas',
  templateUrl: './editar-mascotas.component.html',
  styleUrls: ['./editar-mascotas.component.css']
})
export class EditarMascotasComponent {
  constructor(
    private mascotaService: MascotaService,
    private router: Router
  ) { }

  @Output() 
  addMascotaEvent = new EventEmitter<Mascota>();
  
  sendMascota!:Mascota;

  
}
