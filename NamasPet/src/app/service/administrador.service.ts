import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from '../model/administrador';

@Injectable({
  providedIn: 'root',
})
export class AdministradorService {

  constructor(private http: HttpClient) {}

  findById(id: number): Observable<Administrador> {
    return this.http.get<Administrador>('http://localhost:8090/administrador/find/' + id);
  }
}
