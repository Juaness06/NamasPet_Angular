import { Injectable } from '@angular/core';
import { MascotaCL } from '../model/mascota-cl';
import { Mascota } from '../mascotas/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  mascotasList: Mascota[] = [
    /*
    {
    id:1,
    nombre:"maria",
    imagen:"https://labradoresdeabantueso.com/wp-content/uploads/2023/09/Foto-Labrador-1-Guia-min.jpg",
    raza:"Beagle",
    edad:4,
    actividad:false,
    peso:3.5,
    numeroAtenciones:0,
    dueno:123456789
    }
    */
  ];

  constructor() {
    this.generarMascotas(); // Inicializa las mascotas en el constructor
  }

  
  generarMascotas() {
    const nombresPerros = [
      "Max", "Bella", "Charlie", "Luna", "Rocky", "Molly", "Toby", "Lucy", "Coco", "Bailey",
      // ...otros nombres
    ];

    const razas = [
      "Labrador", "Bulldog", "Beagle", "Poodle", "Boxer", "Dálmata", "Pastor Alemán",
      // ...otras razas
    ];

    const imagenes = [
      "https://labradoresdeabantueso.com/wp-content/uploads/2023/09/Foto-Labrador-1-Guia-min.jpg",
      // ...otras URLs de imágenes
    ];

    for (let i = 1; i <= 100; i++) {
      const urlImagen = imagenes[i % imagenes.length];
      const nombre = nombresPerros[i % nombresPerros.length];
      const id = i;
      const raza = razas[i % razas.length];
      const edad = this.generarNumeroAleatorio(1, 15);
      const actividad = i % 2 === 0;
      const pesoRaw = 5.0 + (40.0 - 5.0) * Math.random();
      const peso = Math.round(pesoRaw * 10) / 10.0;
      const numeroAtenciones = (i % 3) + 1;
      const clienteId = i; // Ejemplo de asignación, ajusta según tu modelo

      const nuevaMascota = new MascotaCL(id, urlImagen, nombre, raza, edad, actividad, peso, numeroAtenciones, clienteId);
      this.mascotasList.push(nuevaMascota); // Añade la nueva mascota a la lista
    }
  }

  generarNumeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  findAll() {
    return this.mascotasList;
  }

  findById(id:number):Mascota{ 
    const mascota:Mascota = this.mascotasList.find(o => o.id === id)!;
    return mascota;
  }
}
