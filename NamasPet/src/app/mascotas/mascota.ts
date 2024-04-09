import { Cliente } from "../clientes/Cliente";

export interface Mascota {
    id:number;
    imagen:string;
    nombre:string;
    raza:string;
    edad:number;
    actividad:boolean;
    peso:number;
    numeroAtenciones:number;

   //despues quitar
   cliente?:Cliente;
  // public cliente?:Cliente; // Opcional, dependiendo de si siempre esperas tener esta información
   //public tratamientos:Tratamiento[];
}