import { Injectable } from '@angular/core';

import { Mascota } from '../mascotas/mascota';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  mascotasList: Mascota[] = [
    
    ];
    


  constructor(private http: HttpClient) {
    
  }



  findAll():Observable<Mascota[]> {
    return this.http.get<Mascota[]>('http://localhost:8090/perro/all');
  }

  findById(id:number):Observable<Mascota>{
    const perro = this.http.get<Mascota>('http://localhost:8090/perro/find/'+id);
    return perro;
  }
  
eliminarMascota(id:number){
  console.log("Eliminando mascota con id: "+id);
  this.http.delete('http://localhost:8090/perro/delete/'+id).subscribe();
}
agregarMascota(mascota:Mascota){
   this.http.post('http://localhost:8090/perro/agregar',mascota).subscribe();
  }

editarMascota(mascota:Mascota){
  const index = this.mascotasList.findIndex(o => o.id === mascota.id);
  if (index !== -1) {
    this.mascotasList[index] = mascota;
  }

}
findClientePerro(id:number):Observable<Mascota[]>{
  return this.http.get<Mascota[]>('http://localhost:8090/perro/cliente/'+id);
}
}
