import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Droga } from '../drogas/droga';

@Injectable({
  providedIn: 'root',
})
export class DrogaService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<Droga[]> {
    return this.http.get<Droga[]>('http://localhost:8090/tratamiento/all');
  }

  findById(cedula: number): Observable<Droga> {
    return this.http.get<Droga>('http://localhost:8090/tratamiento/find/' + cedula);
  }

}
