import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Cliente } from '../model/Cliente';
import { Mascota } from '../model/mascota';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private clientesSubject = new BehaviorSubject<Cliente[]>([]);
  public clientes$ = this.clientesSubject.asObservable();
  updateClienteEvent: any;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8090/cliente/all');
  }

  findById(cedula: number): Observable<Cliente> {
    return this.http.get<Cliente>(
      'http://localhost:8090/cliente/find/' + cedula
    );
  }

  eliminarCliente(cedula: number): void {
    console.log('Eliminando Cliente con cédula: ' + cedula);
    this.http
      .delete('http://localhost:8090/cliente/delete/' + cedula)
      .subscribe();
  }

  agregarCliente(cliente: Cliente): void {
    this.http.post('http://localhost:8090/cliente/add', cliente).subscribe();
  }

  editarCliente(cliente: Cliente): Observable<any> {
    return this.http
      .put(`http://localhost:8090/cliente/edit/` + cliente.cedula, cliente)
      .pipe(
        tap(() => {
          this.findAll(); // Actualizar la lista después de editar
        })
      );
  }
  findPerrosCliente(cedula: number): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(
      'http://localhost:8090/cliente/' + cedula + '/mascotas'
    );
  }
}
