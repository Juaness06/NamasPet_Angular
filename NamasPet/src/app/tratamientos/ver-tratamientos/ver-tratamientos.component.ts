import { Component } from '@angular/core';
import { Tratamiento } from '../tratamiento';
import { TratamientoService } from 'src/app/service/tratamientos.service';

@Component({
  selector: 'app-ver-tratamientos',
  templateUrl: './ver-tratamientos.component.html',
  styleUrls: ['./ver-tratamientos.component.css']
})
export class VerTratamientosComponent {
  medicamentoList: Tratamiento[] = [];
  seleccionarMedicamento?: Tratamiento;

  constructor(private tratamientoService: TratamientoService) {}

  ngOnInit(): void {
    this.tratamientoService.findAll().subscribe((tratamiento) => (this.medicamentoList = tratamiento));
  }

  mostrarMedicamento(tratamiento: Tratamiento): void {
    this.seleccionarMedicamento = tratamiento;
  }

}
