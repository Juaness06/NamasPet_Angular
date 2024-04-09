import { Mascota } from "../mascotas/mascota";

export class MascotaCL  {
   public id:number;
   public nombre:string;
   public imagen:string;
   public raza:string;
   public edad:number;
   public actividad:boolean;
   public peso:number;
   public numeroAtenciones:number;

   //despues quitar
  // public cliente?:Cliente; // Opcional, dependiendo de si siempre esperas tener esta información
   //public tratamientos:Tratamiento[];

  constructor(
    id: number, 
    imagen: string, 
    nombre: string, 
    raza: string, 
    edad: number, 
    actividad: boolean, 
    peso: number, 
    numeroAtenciones: number, 
    //cliente despues se quita
    dueno:number,
    //cliente: Cliente // Opcional, dependiendo de si siempre esperas tener esta información, 
    //tratamientos: Tratamiento[]
) {
    this.id = id
    this.imagen = imagen
    this.nombre = nombre
    this.raza = raza
    this.edad = edad
    this.actividad = actividad
    this.peso = peso
    this.numeroAtenciones = numeroAtenciones
    this.dueno = dueno
    //this.cliente = cliente
    //this.tratamientos = tratamientos
  }   
}

