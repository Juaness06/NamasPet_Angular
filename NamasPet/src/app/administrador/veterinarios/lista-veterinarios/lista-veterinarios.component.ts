import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  Ocultar: boolean = true;
  mostrarForm: boolean = false;
  veterinariosList:Veterinario[] = [];
  seleccionarCliente?: Veterinario;
  
  private subs = new Subscription();

  constructor(private veterinarioService: VeterinarioService, private estadoUiService: EstadoUiService,private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      // Verificar la ruta actual y cambiar `Ocultar` según sea necesario
      if (this.router.url.includes('/veterinarios/all')) {
        this.Ocultar = false;
      } else {
        this.Ocultar = true;
      }
    });

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

    this.Ocultar = true;
  }

  mostrarcliente(cliente: Veterinario): void {
    this.seleccionarCliente = cliente; // Assign the pet to the property
  }

  agregarcliente(cliente: Veterinario): void {
    this.veterinariosList.push(cliente);
    this.veterinarioService.agregarVeterinario(cliente);
  }

  eliminarVeterinario(cliente: Veterinario): void {
    this.veterinarioService.eliminarCliente(cliente.id);
    alert(cliente.nombre + ' cambio de estado');
    //recorgar la pagina
    window.location.reload();
  }

  mostrarFormulario(): void {
    this.mostrarForm = true;
  }

  ocultarFormulario(): void {
    this.mostrarForm = false;
  }
  
}
