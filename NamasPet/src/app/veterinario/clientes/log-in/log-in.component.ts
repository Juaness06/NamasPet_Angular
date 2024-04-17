import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/model/mascota';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LoginComponent {
  user = { cedula: '' };
  mascotas: Mascota[] = [];
  clienteNombre: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) {}

  onSubmit() {
    //suscribirse al servicio de findPerrosCliente
    this.route.params.subscribe((params) => {
      const cedula = +params['cedula'];
      this.clienteService.findById(cedula).subscribe((cliente) => {});
      this.clienteService.findPerrosCliente(cedula).subscribe((mascotas) => {
        this.mascotas = mascotas;
      });
    });
    this.router.navigate(['/cliente/'+ this.user.cedula +'/mascotas']);
  }
}
