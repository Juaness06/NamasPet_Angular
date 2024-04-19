import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Cliente } from '../../../model/Cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { Mascota } from 'src/app/model/mascota';
import { Subscription } from 'rxjs';
import { EstadoUiService } from 'src/app/service/estados.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
})
export class ListaClientesComponent implements OnInit, OnDestroy {
  
  @Input() mostrarEstilosEspeciales: boolean = false;

  mostrarForm: boolean = false;
  clientesList: Cliente[] = [];
  seleccionarCliente?: Cliente;
  mascotasCliente: Mascota[] = [];
  private subs = new Subscription();

  constructor(private clienteService: ClienteService, private estadoUiService: EstadoUiService) {}

  ngOnInit(): void {
    this.clienteService.findAll().subscribe((clientes: Cliente[]) => (this.clientesList = clientes));
    this.clienteService.updateClienteEvent.subscribe((clienteEditado: Cliente) => {
      this.clientesList = this.clientesList.map((cliente) => {
        if (cliente.cedula === clienteEditado.cedula) {
          return clienteEditado;
        } else {
          return cliente;
        }
      });
    });

    this.subs.add(
      this.estadoUiService.mostrarListaClientes$.subscribe(
        (estado) => (this.mostrarEstilosEspeciales = estado)
      )
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

  mostrarFormulario(): void {
    this.mostrarForm = true;
  }
  cargarMascotasCliente(cedula: number): void {
    this.clienteService.findPerrosCliente(cedula).subscribe((mascotas) => {
      this.mascotasCliente = mascotas;
    });
  }

  ocultarFormulario(): void {
    this.mostrarForm = false;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
