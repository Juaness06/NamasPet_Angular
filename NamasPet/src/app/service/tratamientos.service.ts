import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tratamiento } from '../tratamientos/tratamiento';

@Injectable({
  providedIn: 'root',
})
export class TratamientoService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>('http://localhost:8090/tratamiento/all');
  }

  findById(cedula: number): Observable<Tratamiento> {
    return this.http.get<Tratamiento>('http://localhost:8090/tratamiento/find/' + cedula);
  }

}
