import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinario } from 'src/app/model/veterinario';
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-log-in-veterinarios',
  templateUrl: './log-in-veterinarios.component.html',
  styleUrls: ['./log-in-veterinarios.component.css'],
})
export class LogInVeterinariosComponent {
  vet = { cedula: null };

  veterinario = {
    id: 0,
    nombre: '',
    contrasena: '',
    especialidad: '',
    atenciones: 0,
    foto: '',
    activo: true,
  } as Veterinario;

  constructor(
    private router: Router,
    private vetService: VeterinarioService,
    private route: ActivatedRoute
  ) {}

  onSubmit(): void {
    this.route.params.subscribe((params) => {
      const cedula = this.vet.cedula !== null ? +this.vet.cedula : 0;
      if (!isNaN(cedula)) {
        this.vetService
          .findByIdAndContrasena(cedula, this.veterinario.contrasena)
          .subscribe(
            (veterinario) => {
              if (veterinario === null) {
                alert('Credenciales incorrectas');
              } else {
                alert('Bienvenido ' + veterinario.nombre);
                this.router.navigate(['/']);
              }
            },
            (error) => {
              console.log(this.veterinario.id, this.veterinario.contrasena);
              // Manejar el error
              console.error('Error al buscar al veterinario:', error);
              // Aquí puedes mostrar un mensaje de error al usuario
            }
          );
      }
    });
  }
}
