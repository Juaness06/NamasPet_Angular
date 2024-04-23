import { Component } from '@angular/core';
import { Tratamiento } from 'src/app/model/tratamiento';
import { TratamientoService } from 'src/app/service/tratamientos.service';

@Component({
  selector: 'app-lista-tratamientos',
  templateUrl: './lista-tratamientos.component.html',
  styleUrls: ['./lista-tratamientos.component.css']
})
export class ListaTratamientosComponent {

  medicamentoList: Tratamiento[] = [];
  seleccionarMedicamento?: Tratamiento;

  constructor(private tratamientoService: TratamientoService) {}

  ngOnInit(): void {
    this.tratamientoService.findAll().subscribe((tratamientos) => (this.medicamentoList = tratamientos));
  }

  mostrarMedicamento(tratamiento: Tratamiento): void {
    this.seleccionarMedicamento = tratamiento;
  }
  
}
