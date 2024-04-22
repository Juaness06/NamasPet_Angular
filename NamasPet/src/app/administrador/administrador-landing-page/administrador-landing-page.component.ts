import { Component } from '@angular/core';
import { EstadoUiService } from 'src/app/service/estados.service';

@Component({
  selector: 'app-administrador-landing-page',
  templateUrl: './administrador-landing-page.component.html',
  styleUrls: ['./administrador-landing-page.component.css']
})
export class AdministradorLandingPageComponent {

  constructor(private estadoUiService: EstadoUiService) {}

  mostrarLandingPage = true;
  mostrarListaMascotas = false;
  mostrarListaClientes = false;
  mostrarDashboard = false;
  mostrarFooter = true;
  mostrarListaVeterinarios = false;

  mostrarSeccion(seccion: string) {
    
    // Inicialmente oculta todos los contenedores
    this.mostrarLandingPage = false;
    this.mostrarListaMascotas = false;
    this.mostrarListaClientes = false;
    this.mostrarListaVeterinarios = false;
    this.mostrarFooter = false;
    this.mostrarDashboard = false;

    switch (seccion) {
      case 'landing':
        this.mostrarLandingPage = true;
        this.mostrarFooter = true;
        break;
      case 'mascotas':
        this.mostrarListaMascotas = true;
        this.mostrarFooter = false;
        this.estadoUiService.setMostrarListaMascotas(true);
        break;
      case 'clientes':
        this.mostrarListaClientes = true;
        this.estadoUiService.setMostrarListaClientes(true);
        break;
      case 'veterinarios':
        this.mostrarListaVeterinarios = true;
        this.estadoUiService.setMostrarListaMascotas(false);
        this.estadoUiService.setMostrarListaClientes(false);
        break;
      case 'dashboard':
        this.mostrarDashboard = true;
        this.estadoUiService.setMostrarListaMascotas(false);
        this.estadoUiService.setMostrarListaClientes(false);
        break;
      default:
        this.mostrarLandingPage = true;
        this.mostrarFooter = true;
        this.estadoUiService.setMostrarListaMascotas(false);
        this.estadoUiService.setMostrarListaClientes(false);
        break;
    }
  }  
}
