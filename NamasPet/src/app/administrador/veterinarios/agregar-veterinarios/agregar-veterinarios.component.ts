import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Veterinario } from 'src/app/model/veterinario';
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-agregar-veterinarios',
  templateUrl: './agregar-veterinarios.component.html',
  styleUrls: ['./agregar-veterinarios.component.css']
})
export class AgregarVeterinariosComponent {
  constructor(
    private router: Router,
    private veterinarioService: VeterinarioService // Nombre corregido a CamelCase
  ) {}

  @Output()
  addClienteEvent = new EventEmitter<Veterinario>();

  sendCliente!: Veterinario;

  formVeterinario: Veterinario = {
    id: 0,
    nombre: '',
    contrasena: '',
    especialidad: '',
    atenciones:0,
    foto:'',
    activo:true
  };

  registrarFormVeterinario() {
    this.sendCliente = Object.assign({}, this.formVeterinario);
    this.veterinarioService.agregarVeterinario(this.formVeterinario); // Método corregido para agregar un cliente
    this.router.navigate(['/veterinarios/all']); // Navegación actualizada al listado de clientes
  }

  registrarVeterinario(): void {
    this.sendCliente = Object.assign({}, this.formVeterinario);
    this.addClienteEvent.emit(this.sendCliente);
  }
}
