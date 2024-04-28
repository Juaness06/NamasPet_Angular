import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from '../model/administrador';
import { Tratamiento } from '../model/tratamiento';

@Injectable({
  providedIn: 'root',
})
export class AdministradorService {

  constructor(private http: HttpClient) {}

  findById(id: number): Observable<Administrador> {
    return this.http.get<Administrador>('http://localhost:8090/administrador/find/' + id);
  }

  //historial del perro
  findHistorialPerro(idPerro: number): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>('http://localhost:8090/tratamiento/historial/' + idPerro);
  }

  findByNombreAndContrasena(nombre: string, contrasena: string): Observable<Administrador> {
    return this.http.get<Administrador>(`http://localhost:8090/administrador/findByNombreAndContrasena/${nombre}/${contrasena}`);
  }

  //!Querys para el dashboard del administrador
  
  //?Primera Query
  contarTratamientosUltimoMes(): Observable<number>{
    return this.http.get<number>('http://localhost:8090/tratamiento/count-ultimo-mes');
  }

  //?Segunda Query
  contarTratamientosPorDroga(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8090/tratamiento/cantidad_tipo`);
  }

  //?Tercera Query
  getVeterinariosActivosCount(): Observable<number> {
    return this.http.get<number>(`http://localhost:8090/veterinario/activos`);
  }

  //?Cuarta Query
  getVeterinariosInactivosCount(): Observable<number> {
    return this.http.get<number>(`http://localhost:8090/veterinario/inactivos`);
  }

  //?Quinta Query
  contarTotalMascotas(): Observable<number> {
    return this.http.get<number>(`http://localhost:8090/perro/perros`);
  }

  //?Sexta Query
  contarTotalMascotasActivas(): Observable<number> {
    return this.http.get<number>(`http://localhost:8090/perro/activos`);
  }

  //?Septima Query
  ventasTotalesVeterinaria(): Observable<number> {
    return this.http.get<number>(`http://localhost:8090/administrador/venta`);
  }

  //?Octava Query
  gananciasTotalesVeterinaria(): Observable<number> {
    return this.http.get<number>(`http://localhost:8090/administrador/ganancias`);
  }


}
