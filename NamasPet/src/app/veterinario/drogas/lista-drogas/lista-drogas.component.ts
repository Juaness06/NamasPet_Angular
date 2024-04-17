import { Component } from '@angular/core';
import { Droga } from '../../../model/droga';
import { DrogaService } from 'src/app/service/droga.service';
import { Tratamiento } from 'src/app/model/tratamiento';

@Component({
  selector: 'app-lista-drogas',
  templateUrl: './lista-drogas.component.html',
  styleUrls: ['./lista-drogas.component.css']
})
export class ListaDrogasComponent {
  medicamentoList: Droga[] = [];
  seleccionarMedicamento?: Droga;

  constructor(private drogaService: DrogaService) {}

  ngOnInit(): void {
    this.drogaService.findAll().subscribe((droga) => (this.medicamentoList = droga));
  }

  mostrarMedicamento(droga: Droga): void {
    this.seleccionarMedicamento = droga;
  }
}
