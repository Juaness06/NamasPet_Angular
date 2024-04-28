import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NamasPet';

  pantallasPermitidasHeader = ['mascotas', 'clientes', '', 'drogas'];
  pantallasPermitidasFooter = ['']; // Asegúrate de que el nombre sea consistente

  mostrarHeader: boolean = true;
  mostrarFooter: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.mostrarHeaderFooter(event.url);
      }
    });
  }

  // Método para mostrar o no el header y el footer
  mostrarHeaderFooter(url: string) {
    const pantalla = url.split('/')[1]; // Asume que la URL es del tipo '/pantalla/...'
    this.mostrarHeader = this.pantallasPermitidasHeader.includes(pantalla);
    this.mostrarFooter = this.pantallasPermitidasFooter.includes(pantalla);
    const cedulaCliente:number = Number(localStorage.getItem('cedula'));
    if(pantalla == '**' || pantalla == 'cliente/'+cedulaCliente+'/mascotas'){
      this.mostrarHeader = false;
      this.mostrarFooter = false;
    }
  }
}
