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
  user = { cedula: null };
  mascotas: Mascota[] = [];
  clienteNombre: string = '';
  clienteEncontrado: boolean = true; // Variable para controlar si el cliente fue encontrado o no

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService
  ) {}

  onSubmit() {
    // suscribirse al servicio de findPerrosCliente
    this.route.params.subscribe((params) => {
      const cedula = this.user.cedula !== null ? +this.user.cedula : 0;
      if (!isNaN(cedula)) {
        // Verifica si cedula es un número válido
        // Buscar al cliente
        this.clienteService.findById(cedula).subscribe(
          (cliente) => {
            // Cliente encontrado, buscar sus perros
            this.clienteService.findPerrosCliente(cedula).subscribe(
              (mascotas) => {
                this.mascotas = mascotas;
                // Navegar solo si el cliente y sus mascotas se encuentran
                this.router.navigate(['/cliente/'+ this.user.cedula +'/mascotas']);
              },
              (error) => {
                // Error al buscar las mascotas del cliente
                console.error("Error al buscar mascotas del cliente:", error);
                // Muestra una alerta o realiza alguna otra acción apropiada aquí
                alert("Error al buscar las mascotas del cliente.");
              }
            );
          },
          (error) => {
            // Error al buscar el cliente
            console.error("Error al buscar cliente:", error);
            // Muestra una alerta o realiza alguna otra acción apropiada aquí
            alert("Cliente no encontrado.");
          }
        );
      } else {
        // Si cedula no es un número válido
        console.error("Cédula no válida:", params['cedula']);
        // Muestra una alerta o realiza alguna otra acción apropiada aquí
        alert("Cédula no válida.");
      }
    });
  }
}
