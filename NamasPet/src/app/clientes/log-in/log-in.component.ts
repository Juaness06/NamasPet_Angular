import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LoginComponent {
  user = { cedula: '' };

  constructor(private router: Router) {}

  onSubmit() {
    // Aquí iría la lógica para verificar la cédula
    console.log('Cédula ingresada:', this.user.cedula);
    this.router.navigate(['/clientes/']); // Asegúrate de que esta ruta es correcta
  }
}
