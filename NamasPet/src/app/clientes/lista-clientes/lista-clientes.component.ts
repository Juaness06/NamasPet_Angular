import { Component, OnInit } from '@angular/core';
import { Cliente } from '../Cliente';
import { ClienteService } from 'src/app/service/cliente.service';
import { Mascota } from 'src/app/mascotas/mascota';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  mostrarForm: boolean = false;
  clientesList: Cliente[] = [];
  seleccionarCliente?: Cliente;
  mascotasCliente: Mascota[] = [];
  
    constructor(private clienteService: ClienteService) {}
  
    ngOnInit(): void {
      this.clienteService.findAll().subscribe((clientes: Cliente[]) => (this.clientesList = clientes));
      console.log('Numero de clientes:' + this.clientesList.length);
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
      this.clienteService.findPerrosCliente(cedula).subscribe(mascotas => {
        this.mascotasCliente = mascotas;
      });
    }
  
  
    ocultarFormulario(): void {
      this.mostrarForm = false;
    }
  }
  
