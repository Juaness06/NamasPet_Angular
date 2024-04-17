import { Injectable } from '@angular/core';

import { Mascota } from '../model/mascota';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MascotaService {
  mascotasList: Mascota[] = [];

  constructor(private http: HttpClient) {}

  findAll(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>('http://localhost:8090/perro/all');
  }

  findById(id: number): Observable<Mascota> {
    return this.http.get<Mascota>('http://localhost:8090/perro/find/' + id);
  }

  eliminarMascota(id: number) {
    console.log('Eliminando mascota con id: ' + id);
    this.http.delete('http://localhost:8090/perro/delete/' + id).subscribe();
  }

  agregarMascota(mascota: Mascota, cedula: number) {
    this.http.post('http://localhost:8090/perro/agregar/'+cedula, mascota).subscribe();
  }

  editarMascota(mascota: Mascota,cedula:number) {
    return this.http
      .put('http://localhost:8090/perro/edit/'+cedula, mascota);
  }

  findClientePerro(id: number): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(
      'http://localhost:8090/perro/cliente/' + id
    );
  }
}
