import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable , tap} from 'rxjs';
import { Tratamiento } from '../model/tratamiento';

@Injectable({
  providedIn: 'root',
})
export class TratamientoService {
  private clientesSubject = new BehaviorSubject<Tratamiento[]>([]);
  public clientes$ = this.clientesSubject.asObservable();
  updateClienteEvent: any;

  constructor(private http: HttpClient) {}

  findAll(): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>('http://localhost:8090/tratamiento/all');
  }

  findById(cedula: number): Observable<Tratamiento> {
    return this.http.get<Tratamiento>('http://localhost:8090/tratamiento/find/' + cedula);
  }

}
