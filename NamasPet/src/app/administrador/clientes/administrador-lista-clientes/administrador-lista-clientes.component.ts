import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { Mascota } from 'src/app/model/mascota';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-administrador-lista-clientes',
  templateUrl: './administrador-lista-clientes.component.html',
  styleUrls: ['./administrador-lista-clientes.component.css'],
})
export class AdministradorListaClientesComponent implements OnInit {
  clientesList: Cliente[] = [];
  seleccionarCliente?: Cliente;
  mascotasCliente: Mascota[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService
      .findAll()
      .subscribe((clientes: Cliente[]) => (this.clientesList = clientes));
    this.clienteService.updateClienteEvent.subscribe(
      (clienteEditado: Cliente) => {
        this.clientesList = this.clientesList.map((cliente) => {
          if (cliente.cedula === clienteEditado.cedula) {
            return clienteEditado;
          } else {
            return cliente;
          }
        });
      }
    );
  }

  mostrarcliente(cliente: Cliente): void {
    this.seleccionarCliente = cliente; // Assign the pet to the property
  }

  agregarcliente(cliente: Cliente): void {
    this.clientesList.push(cliente);
    this.clienteService.agregarCliente(cliente);
  }

  eliminarcliente(cliente: Cliente): void {
    this.clientesList = this.clientesList.filter((m) => m !== cliente);
    this.clienteService.eliminarCliente(cliente.cedula);
  }

  cargarMascotasCliente(cedula: number): void {
    this.clienteService.findPerrosCliente(cedula).subscribe((mascotas) => {
      this.mascotasCliente = mascotas;
    });
  }
}
