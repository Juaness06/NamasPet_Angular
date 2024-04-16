import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from 'src/app/mascotas/mascota';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from '../Cliente';

@Component({
  selector: 'app-ver-mascotas-cliente',
  templateUrl: './ver-mascotas-cliente.component.html',
  styleUrls: ['./ver-mascotas-cliente.component.css'],
})
export class VerMascotasClienteComponent implements OnInit {
  mascotas: Mascota[] = [];
  clienteNombre: string = '';

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const cedula = +params['cedula'];
      this.clienteService.findById(cedula).subscribe((cliente) => {
        this.clienteNombre = cliente.nombre;
      });
      this.clienteService.findPerrosCliente(cedula).subscribe((mascotas) => {
        this.mascotas = mascotas;
      });
    });
  }
}
