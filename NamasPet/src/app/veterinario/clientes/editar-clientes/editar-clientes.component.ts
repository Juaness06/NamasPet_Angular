import { Component, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from '../../../model/Cliente';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css'],
})
export class EditarClientesComponent {
  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @Output()
  updateClienteEvent = new EventEmitter<Cliente>();

  sendCliente!: Cliente;
  buscarCliente!: Cliente;

  formCliente: Cliente = {
    cedula: 0,
    nombre: '',
    correo: '',
    celular: 0,
    usuario: '',
    contrasena: '',
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const cedula = Number(params.get('cedula'));
      console.log('Cédula obtenida de la ruta:', cedula); // Para depuración
      if (cedula) {
        this.clienteService.findById(cedula).subscribe(
          (clienteInformacion) => {
            console.log('Cliente obtenido del servicio:', clienteInformacion); // Para depuración
            this.formCliente = clienteInformacion;
          },
          (error) => {
            console.error('Error al buscar el cliente:', error);
            // Aquí también puedes manejar la reasignación de `formCliente` o simplemente dejar el objeto como estaba.
          }
        );
      }
    });
  }
  

  actualizarCliente() {
    this.sendCliente = Object.assign({}, this.formCliente);
    this.clienteService.editarCliente(this.sendCliente).subscribe(() => {
      this.updateClienteEvent.emit(this.sendCliente); // Emitir el cliente actualizado
      this.router.navigate(['/clientes/all']);
    });
  }
}
