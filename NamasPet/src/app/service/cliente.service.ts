import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../clientes/Cliente';
import { Mascota } from '../mascotas/mascota';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8090/cliente/all');
  }

  findById(cedula: number): Observable<Cliente> {
    return this.http.get<Cliente>('http://localhost:8090/cliente/find/' + cedula);
  }

  eliminarCliente(cedula: number): void {
    console.log('Eliminando Cliente con cédula: ' + cedula);
    this.http.delete('http://localhost:8090/cliente/delete/' + cedula)
      .subscribe();
  }

  agregarCliente(cliente: Cliente): void {
    this.http.post('http://localhost:8090/cliente/agregar', cliente)
      .subscribe();
  }

  editarCliente(cliente: Cliente): void {
    this.http.put('http://localhost:8090/cliente/edit/' + cliente.cedula, cliente)
      .subscribe();
  }

  findPerrosCliente(cedula: number): Observable<Mascota[]> {
    return this.http.get<Mascota[]>('http://localhost:8090/cliente/' + cedula + '/mascotas');
  }
}
