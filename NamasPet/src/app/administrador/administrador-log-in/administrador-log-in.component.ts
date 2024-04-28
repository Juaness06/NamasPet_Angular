import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrador } from 'src/app/model/administrador';
import { AdministradorService } from 'src/app/service/administrador.service';

//TODO http://localhost:4200/admin/login

@Component({
  selector: 'app-administrador-log-in',
  templateUrl: './administrador-log-in.component.html',
  styleUrls: ['./administrador-log-in.component.css'],
})
export class AdministradorLogInComponent {
  admin = { id: 0, nombre: '', contrasena: '' } as Administrador;

  constructor(
    private router: Router,
    private adminService: AdministradorService
  ) {}

  onSubmit(): void {
    console.log('dentro del on submit');
    console.log('admin', this.admin);
    this.adminService.findByNombreAndContrasena(this.admin.nombre, this.admin.contrasena).subscribe(
      (administrador) => {
        // Verificar si el administrador es null
        if (administrador === null) {
          // Mostrar una alerta al usuario
          alert('Las credenciales son inválidas');
        } else {
          // Navegar a la URL en caso de éxito
          this.router.navigate(['/admin/home']);
          console.log(administrador);
        }
      },
      (error) => {
        console.log(this.admin.nombre, this.admin.contrasena);
        // Manejar el error
        console.error('Error al buscar al administrador:', error);
        // Aquí puedes mostrar un mensaje de error al usuario
      }
    );
  }
}
