export interface Mascota {
    id:number;
    nombre:string;
    imagen:string;
    raza:string;
    edad:number;
    actividad:boolean;
    peso:number;
    numeroAtenciones:number;

   //despues quitar
   dueno:number;
  // public cliente?:Cliente; // Opcional, dependiendo de si siempre esperas tener esta información
   //public tratamientos:Tratamiento[];
}