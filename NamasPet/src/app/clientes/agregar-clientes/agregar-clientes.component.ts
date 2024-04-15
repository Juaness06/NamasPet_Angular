import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from '../Cliente';

@Component({
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.component.html',
  styleUrls: ['./agregar-clientes.component.css']
})
export class AgregarClientesComponent {
  constructor(
    private router: Router,
    private clienteService: ClienteService // Nombre corregido a CamelCase
  ) {}

  @Output()
  addClienteEvent = new EventEmitter<Cliente>();

  sendCliente!: Cliente;

  formCliente: Cliente = {
    cedula: 0,
    nombre: '',
    correo: '',
    celular: 0,
    contrasena: '',
    usuario: ''
  };

  registrarCliente() {
    console.log(this.formCliente);
    if (this.clienteService.findById(this.formCliente.cedula) != null) {
      this.sendCliente = Object.assign({}, this.formCliente);
      this.clienteService.agregarCliente(this.formCliente); // Método corregido para agregar un cliente
      this.router.navigate(['/clientes/all']); // Navegación actualizada al listado de clientes
    } else {
      console.log('El cliente no existe');
    }
  }

  registrarFormCliente(): void {
    console.log(this.formCliente);
    this.sendCliente = Object.assign({}, this.formCliente);
    this.addClienteEvent.emit(this.sendCliente);
  }
}
