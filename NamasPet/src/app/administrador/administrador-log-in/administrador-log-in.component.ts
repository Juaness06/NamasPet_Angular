import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrador } from 'src/app/model/administrador';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-administrador-log-in',
  templateUrl: './administrador-log-in.component.html',
  styleUrls: ['./administrador-log-in.component.css'],
})
export class AdministradorLogInComponent {
  admin = { id: 1 } as Administrador; // Inicializa id como 0, suponiendo que es un número

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private adminService: AdministradorService
  ) {}

  onSubmit(): void {
    // No necesitas suscribirte a route.params aquí
    const id = +this.admin.id; // Convierte id a un número
    this.adminService.findById(id).subscribe((administrador) => {
      // Este código se ejecutará cuando se haya encontrado el administrador con el ID proporcionado
      console.log('Administrador encontrado:', administrador);
      this.router.navigate(['/admin/home/' + administrador.id]);
    }, (error) => {
      // Este código se ejecutará si no se encuentra un administrador con el ID proporcionado
      console.error('Error al buscar el administrador:', error);
      // Aquí puedes manejar el error, como mostrar un mensaje al usuario
    });
  }
}
