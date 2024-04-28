import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-administrador-agregar-cliente',
  templateUrl: './administrador-agregar-cliente.component.html',
  styleUrls: ['./administrador-agregar-cliente.component.css'],
})
export class AdministradorAgregarClienteComponent {
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
    usuario: '',
  };

  registrarFormCliente() {
    this.sendCliente = Object.assign({}, this.formCliente);
    this.clienteService.agregarCliente(this.formCliente); // Método corregido para agregar un cliente
    this.router.navigate(['/admin/clientes/all']); // Navegación actualizada al listado de clientes
  }

  registrarCliente(): void {
    this.sendCliente = Object.assign({}, this.formCliente);
    this.addClienteEvent.emit(this.sendCliente);
  }
}
