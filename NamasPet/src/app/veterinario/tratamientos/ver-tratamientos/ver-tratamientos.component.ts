import { Component } from '@angular/core';
import { Tratamiento } from '../../../model/tratamiento';
import { TratamientoService } from 'src/app/service/tratamientos.service';

@Component({
  selector: 'app-ver-tratamientos',
  templateUrl: './ver-tratamientos.component.html',
  styleUrls: ['./ver-tratamientos.component.css']
})
export class VerTratamientosComponent {
  mostrarForm: boolean = false;
  medicamentoList: Tratamiento[] = [];
  seleccionarMedicamento?: Tratamiento;

  constructor(private tratamientoService: TratamientoService) {}

  ngOnInit(): void {
    this.tratamientoService.findAll().subscribe((tratamientos) => (this.medicamentoList = tratamientos));
  }

  mostrarMedicamento(tratamiento: Tratamiento): void {
    this.seleccionarMedicamento = tratamiento;
  }
  mostrarFormulario(): void {
    this.mostrarForm = true;
  }

  ocultarFormulario(): void {
    this.mostrarForm = false;
  }
}
