import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tratamiento } from '../model/tratamiento';
import { Droga } from '../model/droga';

@Injectable({
  providedIn: 'root',
})
export class TratamientoService {
  private baseUrl = 'http://localhost:8090/tratamiento';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>(`${this.baseUrl}/all`);
  }

  findById(id: number): Observable<Tratamiento> {
    return this.http.get<Tratamiento>(`${this.baseUrl}/find/${id}`);
  }

  addTratamiento(tratamiento: Tratamiento, idperro: number, iddroga: number,idveterinario: number): void {
    this.http.post(`${this.baseUrl}/add/${idperro}/${iddroga}/${idveterinario}`, tratamiento).subscribe();
  } 

  DrogadelTratamiento(id: number): Observable<Droga> {
    return this.http.get<Droga>(`${this.baseUrl}/find/${id}/droga`);
}


  agregarDrogaATratamiento(tratamientoId: number, drogaId: number): void {
     this.http.put(`${this.baseUrl}/addDroga/${tratamientoId}/${drogaId}`,{}).subscribe();
  }
  
}
