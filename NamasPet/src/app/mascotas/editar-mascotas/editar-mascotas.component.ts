import { Component, EventEmitter, Output,SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaService } from 'src/app/service/mascota.service';
import { Mascota } from '../mascota';

@Component({
  selector: 'app-editar-mascotas',
  templateUrl: './editar-mascotas.component.html',
  styleUrls: ['./editar-mascotas.component.css']
})
export class EditarMascotasComponent {
  constructor(
    private mascotaService: MascotaService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  @Output() 
  addMascotaEvent = new EventEmitter<Mascota>();
  
  sendMascota!:Mascota;
  buscarMascota!:Mascota;
  formMascota!: Mascota;



  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      //this.buscarMascota = Object.assign({}, this.mascotaService.findById(id));
      console.log(this.buscarMascota);
      this.formMascota = Object.assign({}, this.buscarMascota);
  });
   
  }
  actualizarMascota(){
    this.sendMascota = Object.assign({}, this.formMascota);
    this.mascotaService.editarMascota(this.sendMascota);
    this.router.navigate(['mascotas/all']);
  }
}
