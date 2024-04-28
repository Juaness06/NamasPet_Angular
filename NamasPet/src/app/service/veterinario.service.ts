import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Veterinario } from '../model/veterinario';

@Injectable({
  providedIn: 'root',
})
export class VeterinarioService {
  private clientesSubject = new BehaviorSubject<Veterinario[]>([]);
  public clientes$ = this.clientesSubject.asObservable();
  updateClienteEvent: any;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Veterinario[]> {
    return this.http.get<Veterinario[]>(
      'http://localhost:8090/veterinario/all'
    );
  }

  findById(cedula: number): Observable<Veterinario> {
    return this.http.get<Veterinario>(
      'http://localhost:8090/veterinario/' + cedula
    );
  }

  /*

  eliminarCliente(cliente: Veterinario): Observable<any> {
    
    return this.http
      .put(`http://localhost:8090/cliente/edit/` + cliente.cedula, cliente)
      .pipe(
        tap(() => {
          this.findAll(); // Actualizar la lista después de editar
        })
      );
    
  }
  */

  agregarVeterinario(cliente: Veterinario): void {
    this.http
      .post('http://localhost:8090/veterinario/add', cliente)
      .subscribe();
  }

  eliminarCliente(cedula: number): void {
    console.log('Eliminando Cliente con cédula: ' + cedula);
    this.http
      .delete('http://localhost:8090/veterinario/borrar/' + cedula)
      .subscribe();
  }

  editarvVeterinario(cliente: Veterinario): Observable<any> {
    return this.http
      .put(`http://localhost:8090/veterinario/editar/` + cliente.id, cliente)
      .pipe(
        tap(() => {
          this.findAll(); // Actualizar la lista después de editar
        })
      );
  }

  findByIdAndContrasena(id: number, contrasena: string): Observable<Veterinario> {
    return this.http.get<Veterinario>(`http://localhost:8090/veterinario/findByIdAndContrasena/${id}/${contrasena}`);
  }
}
