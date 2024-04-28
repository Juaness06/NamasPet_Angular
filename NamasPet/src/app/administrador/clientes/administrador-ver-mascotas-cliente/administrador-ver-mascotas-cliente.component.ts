import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from 'src/app/model/mascota';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-administrador-ver-mascotas-cliente',
  templateUrl: './administrador-ver-mascotas-cliente.component.html',
  styleUrls: ['./administrador-ver-mascotas-cliente.component.css']
})
export class AdministradorVerMascotasClienteComponent implements OnInit {

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
