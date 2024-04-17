import { Cliente } from './Cliente';

export interface Mascota {
  id: number;
  imagen: string;
  nombre: string;
  raza: string;
  edad: number;
  actividad: boolean;
  peso: number;
  numeroAtenciones: number;
  cedulaCliente: number;
  cliente?: Cliente;
}
