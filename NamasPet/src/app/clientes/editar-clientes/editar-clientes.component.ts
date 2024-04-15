import { Component, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from '../Cliente';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css']
})
export class EditarClientesComponent {
  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  @Output() 
  updateClienteEvent = new EventEmitter<Cliente>();
  
  sendCliente!: Cliente;
  buscarCliente!: Cliente;
  formCliente!: Cliente;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.clienteService.findById(id).subscribe(
        (clienteInformacion) => {
         this.buscarCliente = clienteInformacion;
         this.formCliente = Object.assign({}, this.buscarCliente);
        },
        error => {
          console.error('Error al buscar el cliente:', error);
        }
      );
    });
  }

  actualizarCliente(){
    this.sendCliente = Object.assign({}, this.formCliente);
    this.clienteService.editarCliente(this.sendCliente);
    this.router.navigate(['/clientes/all']);
  }
}
