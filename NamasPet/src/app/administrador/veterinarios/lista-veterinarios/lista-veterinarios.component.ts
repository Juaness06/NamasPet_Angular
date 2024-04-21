import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Veterinario } from 'src/app/model/veterinario';
import { EstadoUiService } from 'src/app/service/estados.service';
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-lista-veterinarios',
  templateUrl: './lista-veterinarios.component.html',
  styleUrls: ['./lista-veterinarios.component.css']
})
export class ListaVeterinariosComponent implements OnInit  {
  @Input() mostrarEstilosEspeciales: boolean = false;

  mostrarForm: boolean = false;
  veterinariosList:Veterinario[] = [];
  seleccionarCliente?: Veterinario;
  
  private subs = new Subscription();

  constructor(private veterinarioService: VeterinarioService, private estadoUiService: EstadoUiService) {}

  ngOnInit(): void {
    this.veterinarioService.findAll().subscribe((clientes: Veterinario[]) => (this.veterinariosList = clientes));
    this.veterinarioService.updateClienteEvent.subscribe((clienteEditado: Veterinario) => {
      this.veterinariosList = this.veterinariosList.map((veterinario) => {
        if (veterinario.id === clienteEditado.id) {
          return clienteEditado;
        } else {
          return veterinario;
        }
      });
    });

    this.subs.add(
      this.estadoUiService.mostrarListaClientes$.subscribe(
        (estado) => (this.mostrarEstilosEspeciales = estado)
      )
    );
  }

  mostrarcliente(cliente: Veterinario): void {
    this.seleccionarCliente = cliente; // Assign the pet to the property
  }

  agregarcliente(cliente: Veterinario): void {
    this.veterinariosList.push(cliente);
    this.veterinarioService.agregarVeterinario(cliente);
  }

  eliminarVeterinario(cliente: Veterinario): void {
    this.veterinariosList = this.veterinariosList.filter((m) => m !== cliente);
    this.veterinarioService.eliminarCliente(cliente.id);
  }

  mostrarFormulario(): void {
    this.mostrarForm = true;
  }

  ocultarFormulario(): void {
    this.mostrarForm = false;
  }

  

  
}

 




