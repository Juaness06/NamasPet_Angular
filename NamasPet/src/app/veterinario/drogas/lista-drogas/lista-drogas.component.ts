import { Component } from '@angular/core';
import { Tratamiento } from 'src/app/model/tratamiento';
import { TratamientoService } from 'src/app/service/tratamientos.service';

@Component({
  selector: 'app-lista-drogas',
  templateUrl: './lista-drogas.component.html',
  styleUrls: ['./lista-drogas.component.css']
})
export class ListaDrogasComponent {

  
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
