import { Mascota } from "../mascotas/mascota";

export interface Cliente {
    cedula:number;
    nombre:string;
    correo:string;
    celular:number;
    contrasena:string;
    usuario:string;
    perros?:Mascota[];
}