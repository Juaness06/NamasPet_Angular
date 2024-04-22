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
  updateVeterinarioEvent = new EventEmitter<Veterinario>();

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
      const id = Number(params.get('id'));
      console.log('id obtenida de la ruta:', id); // Para depuración
      if (id) {
        this.veterinarioService.findById(id).subscribe(
          (veterinarioInformacion) => {
            console.log('Cliente obtenido del servicio:', veterinarioInformacion); // Para depuración
            this.formVeterinario = veterinarioInformacion;
          },
          (error) => {
            console.error('Error al buscar el veterinarios:', error);
            // Aquí también puedes manejar la reasignación de `formVeterinario` o simplemente dejar el objeto como estaba.
          }
        );
      }
    });
  }
  

  actualizarVeterinarios() {
    this.sendVeterinario = Object.assign({}, this.formVeterinario);
    this.veterinarioService.editarvVeterinario(this.sendVeterinario).subscribe(() => {
      this.updateVeterinarioEvent.emit(this.sendVeterinario); // Emitir el cliente actualizado
      this.router.navigate(['/veterinarios/all']);
    });
  }
}
