import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoUiService {
  
  private mostrarListaMascotas = new BehaviorSubject<boolean>(false);
  private mostrarListaClientes = new BehaviorSubject<boolean>(false);
  mostrarListaMascotas$ = this.mostrarListaMascotas.asObservable();
  mostrarListaClientes$ = this.mostrarListaClientes.asObservable();

  constructor() {}

  setMostrarListaMascotas(mostrar: boolean): void {
    this.mostrarListaMascotas.next(mostrar);
  }


  setMostrarListaClientes(mostrar: boolean): void {
    this.mostrarListaClientes.next(mostrar);
  }
  
}
