import { Injectable } from '@angular/core';

import { Mascota } from '../mascotas/mascota';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../clientes/Cliente';

@Injectable({
  providedIn: 'root',
})
export class CLienteService {
  clientelist: Cliente[] = [];

  constructor(private http: HttpClient) {}

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8090/cliente/all');
  }

  findById(cedula: number): Observable<Cliente> {
    return this.http.get<Cliente>(
      'http://localhost:8090/cliente/find/' + cedula
    );
  }

  eliminarCliente(cedula: number) {
    console.log('Eliminando Cliente con id: ' + cedula);
    this.http
      .delete('http://localhost:8090/cliente/delete/' + cedula)
      .subscribe();
  }

  agregarMascota(cliente: Cliente) {
    this.http
      .post('http://localhost:8090/cliente/agregar', cliente)
      .subscribe();
  }

  editarMascota(cliente: Cliente) {
    this.http
      .put('http://localhost:8090/cliente/edit/' + cliente.cedula, cliente)
      .subscribe();
  }
  /*
    findPerrosCliente(id:number):Observable<Mascota[]>{

    } 
    editarMascota(cliente:Cliente){
      const index = this.clientelist.findIndex(o => o.id === mascota.id);
      if (index !== -1) {
        this.mascotasList[index] = mascota;
      
    }
 */
}
