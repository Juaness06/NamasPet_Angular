import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinario } from 'src/app/model/veterinario';
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-editar-veterinarios',
  templateUrl: './editar-veterinarios.component.html',
  styleUrls: ['./editar-veterinarios.component.css']
})
export class EditarVeterinariosComponent {
  constructor(
    private veterinarioService: VeterinarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @Output()
  updateClienteEvent = new EventEmitter<Veterinario>();

  sendVeterinario!: Veterinario;
  buscarVeterinario!: Veterinario;

  formVeterinario: Veterinario = {
    id: 0,
    nombre: '',
    especialidad: '',
    atenciones:0,
    foto:'',
    activo:true
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const cedula = Number(params.get('cedula'));
      console.log('Cédula obtenida de la ruta:', cedula); // Para depuración
      if (cedula) {
        this.veterinarioService.findById(cedula).subscribe(
          (clienteInformacion) => {
            console.log('Cliente obtenido del servicio:', clienteInformacion); // Para depuración
            this.formVeterinario = clienteInformacion;
          },
          (error) => {
            console.error('Error al buscar el cliente:', error);
            // Aquí también puedes manejar la reasignación de `formVeterinario` o simplemente dejar el objeto como estaba.
          }
        );
      }
    });
  }
  

  actualizarCliente() {
    this.sendVeterinario = Object.assign({}, this.formVeterinario);
    this.veterinarioService.editarvVeterinario(this.sendVeterinario).subscribe(() => {
      this.updateClienteEvent.emit(this.sendVeterinario); // Emitir el cliente actualizado
      this.router.navigate(['/clientes/all']);
    });
  }
}
