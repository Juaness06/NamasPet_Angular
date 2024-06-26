import { Tratamiento } from "./tratamiento";

export interface Veterinario {
    id:number;
    nombre:string;
    contrasena:string;
    especialidad:string;
    atenciones:number;
    foto:string;
    activo:boolean;
    tratamientos?:Tratamiento[];
}